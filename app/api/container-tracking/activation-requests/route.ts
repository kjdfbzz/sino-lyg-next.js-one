import { NextRequest, NextResponse } from 'next/server';

const activationRequestSchema = 'container-tracking.activation-request.v1';
const machineCodePattern = /^CT2-(?:[0-9A-F]{5}-){4}[0-9A-F]{5}$/;
const uuidPattern = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-8][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
const defaultRecipient = 'Bryce.Lee@gwl-lianyungang.com';

type ActivationRequest = {
  schema: typeof activationRequestSchema;
  request_id: string;
  created_at: string;
  app_version: string;
  machine_code: string;
  owner: string;
};

function noStoreJson(body: Record<string, unknown>, status: number) {
  return NextResponse.json(body, {
    status,
    headers: { 'Cache-Control': 'no-store' },
  });
}

function clean(value: unknown, maxLength: number) {
  return String(value ?? '').trim().slice(0, maxLength);
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function validatePayload(value: unknown): ActivationRequest | null {
  if (!value || typeof value !== 'object' || Array.isArray(value)) {
    return null;
  }

  const payload = value as Record<string, unknown>;
  const requestId = clean(payload.request_id, 64).toLowerCase();
  const createdAt = clean(payload.created_at, 64);
  const appVersion = clean(payload.app_version, 120);
  const machineCode = clean(payload.machine_code, 64).toUpperCase();
  const owner = clean(payload.owner, 120);

  if (
    payload.schema !== activationRequestSchema ||
    !uuidPattern.test(requestId) ||
    !createdAt ||
    Number.isNaN(Date.parse(createdAt)) ||
    !appVersion ||
    !machineCodePattern.test(machineCode)
  ) {
    return null;
  }

  return {
    schema: activationRequestSchema,
    request_id: requestId,
    created_at: createdAt,
    app_version: appVersion,
    machine_code: machineCode,
    owner,
  };
}

function buildText(payload: ActivationRequest) {
  return [
    'New Container Tracking System activation request',
    '',
    `Request ID: ${payload.request_id}`,
    `Requested at: ${payload.created_at}`,
    `App version: ${payload.app_version}`,
    `Machine code: ${payload.machine_code}`,
    `Owner/company: ${payload.owner || 'Not provided'}`,
    '',
    'Issue the CTS2 activation code only with the local administrator tool on E:.',
    'The website does not hold an activation private key or generate licenses.',
    '',
    'Request JSON for local import:',
    JSON.stringify(payload, null, 2),
  ].join('\n');
}

function buildHtml(payload: ActivationRequest) {
  const rows = [
    ['Request ID', payload.request_id],
    ['Requested at', payload.created_at],
    ['App version', payload.app_version],
    ['Machine code', payload.machine_code],
    ['Owner/company', payload.owner || 'Not provided'],
  ];
  const requestJson = escapeHtml(JSON.stringify(payload, null, 2));

  return `
    <div style="font-family:Arial,sans-serif;line-height:1.6;color:#111827">
      <h2>New Container Tracking System activation request</h2>
      <table style="border-collapse:collapse;width:100%;max-width:720px">
        ${rows
          .map(
            ([label, item]) => `
              <tr>
                <td style="border:1px solid #e5e7eb;padding:10px;font-weight:700;width:180px">${escapeHtml(label)}</td>
                <td style="border:1px solid #e5e7eb;padding:10px">${escapeHtml(item)}</td>
              </tr>
            `,
          )
          .join('')}
      </table>
      <p><strong>Security:</strong> issue the CTS2 code only with the local administrator tool on E:. This website never stores the signing private key.</p>
      <p>Save the following JSON as a file if you want to import it in the administrator tool:</p>
      <pre style="overflow:auto;background:#f3f4f6;padding:12px;white-space:pre-wrap">${requestJson}</pre>
    </div>
  `;
}

export async function GET() {
  return noStoreJson(
    {
      status: 'ok',
      schema: activationRequestSchema,
      delivery_configured: Boolean(process.env.RESEND_API_KEY),
    },
    200,
  );
}

export async function POST(request: NextRequest) {
  let incoming: unknown;

  try {
    incoming = await request.json();
  } catch {
    return noStoreJson({ error: 'Invalid JSON body.' }, 400);
  }

  const payload = validatePayload(incoming);
  if (!payload) {
    return noStoreJson({ error: 'Invalid activation request.' }, 400);
  }

  const apiKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.ACTIVATION_REQUEST_TO_EMAIL || defaultRecipient;
  const fromEmail =
    process.env.ACTIVATION_REQUEST_FROM_EMAIL ||
    process.env.RESEND_FROM_EMAIL ||
    'Bryce Logistics <onboarding@resend.dev>';

  if (!apiKey) {
    return noStoreJson(
      { error: 'Activation request delivery is not configured.' },
      503,
    );
  }

  const response = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from: fromEmail,
      to: [toEmail],
      subject: `Activation request ${payload.request_id}`,
      text: buildText(payload),
      html: buildHtml(payload),
    }),
  });

  if (!response.ok) {
    return noStoreJson(
      { error: 'Activation request delivery failed.' },
      502,
    );
  }

  return noStoreJson(
    { request_id: payload.request_id, status: 'pending' },
    201,
  );
}
