import { NextRequest, NextResponse } from 'next/server';

type InquiryPayload = {
  pol?: string;
  pod?: string;
  cargo?: string;
  contact?: string;
  readyDate?: string;
  notes?: string;
  lang?: 'zh' | 'en';
};

const defaultRecipient = 'Bryce.Lee@gwl-lianyungang.com';
const siteUrl = 'https://www.sinolyg.com';

function clean(value: unknown) {
  return String(value ?? '').trim().slice(0, 1200);
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function extractEmail(value: string) {
  return value.match(/[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/i)?.[0];
}

function buildSubject(payload: InquiryPayload) {
  const route = [payload.pol, payload.pod]
    .map((value) => clean(value))
    .filter(Boolean)
    .join(' -> ');

  return route
    ? `Freight inquiry: ${route}`
    : 'Freight inquiry from sinolyg.com';
}

function buildText(payload: InquiryPayload) {
  return [
    'New freight inquiry from sinolyg.com',
    '',
    `POL: ${clean(payload.pol) || 'TBD'}`,
    `POD: ${clean(payload.pod) || 'TBD'}`,
    `Cargo: ${clean(payload.cargo) || 'TBD'}`,
    `Ready date: ${clean(payload.readyDate) || 'TBD'}`,
    `Contact: ${clean(payload.contact) || 'TBD'}`,
    '',
    `Notes: ${clean(payload.notes) || 'None'}`,
    '',
    `Language: ${payload.lang === 'en' ? 'English' : 'Chinese'}`,
    `Source: ${siteUrl}`,
  ].join('\n');
}

function buildHtml(payload: InquiryPayload) {
  const rows = [
    ['POL / 起运港', clean(payload.pol) || 'TBD'],
    ['POD / 目的港', clean(payload.pod) || 'TBD'],
    ['Cargo / 货物', clean(payload.cargo) || 'TBD'],
    ['Ready date / 出货时间', clean(payload.readyDate) || 'TBD'],
    ['Contact / 联系方式', clean(payload.contact) || 'TBD'],
    ['Notes / 补充说明', clean(payload.notes) || 'None'],
  ];

  return `
    <div style="font-family:Arial,sans-serif;line-height:1.6;color:#111827">
      <h2>New freight inquiry from sinolyg.com</h2>
      <table style="border-collapse:collapse;width:100%;max-width:720px">
        ${rows
          .map(
            ([label, value]) => `
              <tr>
                <td style="border:1px solid #e5e7eb;padding:10px;font-weight:700;width:190px">${label}</td>
                <td style="border:1px solid #e5e7eb;padding:10px">${escapeHtml(value).replace(/\n/g, '<br />')}</td>
              </tr>
            `,
          )
          .join('')}
      </table>
      <p style="color:#6b7280">Language: ${payload.lang === 'en' ? 'English' : 'Chinese'}<br />Source: ${siteUrl}</p>
    </div>
  `;
}

export async function POST(request: NextRequest) {
  let payload: InquiryPayload;

  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ error: 'Invalid JSON body.' }, { status: 400 });
  }

  if (!clean(payload.cargo) && !clean(payload.contact)) {
    return NextResponse.json(
      { error: 'Cargo or contact information is required.' },
      { status: 400 },
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.INQUIRY_TO_EMAIL || defaultRecipient;
  const fromEmail =
    process.env.RESEND_FROM_EMAIL || 'Bryce Logistics <onboarding@resend.dev>';

  if (!apiKey) {
    return NextResponse.json(
      {
        error: 'Server email is not configured. Use mailto fallback.',
        fallback: 'mailto',
      },
      { status: 503 },
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
      reply_to: extractEmail(clean(payload.contact)),
      subject: buildSubject(payload),
      text: buildText(payload),
      html: buildHtml(payload),
    }),
  });

  if (!response.ok) {
    const message = await response.text();
    return NextResponse.json(
      { error: 'Email provider rejected the request.', detail: message },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}
