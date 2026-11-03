import { NextRequest, NextResponse } from 'next/server';

type InquiryPayload = {
  name?: string;
  company?: string;
  weightVolume?: string;
  pol?: string;
  pod?: string;
  cargo?: string;
  contact?: string;
  readyDate?: string;
  notes?: string;
  lang?: 'zh' | 'en' | 'es';
  sourceUrl?: string;
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

function sourcePage(payload: InquiryPayload) {
  try {
    const url = new URL(clean(payload.sourceUrl));
    if (!['https:', 'http:'].includes(url.protocol)) return { url: siteUrl, slug: '' };
    url.username = ''; url.password = ''; url.hash = ''; url.search = '';
    const slug = url.pathname.split('/').filter(Boolean).pop()?.replace(/[^a-zA-Z0-9_-]/g, '').slice(0, 120) || '';
    return { url: url.toString(), slug };
  } catch {
    return { url: siteUrl, slug: '' };
  }
}

function languageName(payload: InquiryPayload) {
  return payload.lang === 'es' ? 'Spanish (es)' : payload.lang === 'en' ? 'English (en)' : 'Chinese (zh)';
}

function buildSubject(payload: InquiryPayload) {
  const route = [payload.pol, payload.pod]
    .map((value) => clean(value).replace(/[\r\n]/g, ' '))
    .filter(Boolean)
    .join(' -> ');

  const subject = route
    ? `Freight inquiry: ${route}`
    : 'Freight inquiry from sinolyg.com';
  const { slug } = sourcePage(payload);
  return slug ? `${subject} [${slug}]` : subject;
}

function buildText(payload: InquiryPayload) {
  return [
    'New freight inquiry from sinolyg.com',
    '',
    `Name: ${clean(payload.name) || 'TBD'}`,
    `Company: ${clean(payload.company) || 'TBD'}`,
    `POL: ${clean(payload.pol) || 'TBD'}`,
    `POD: ${clean(payload.pod) || 'TBD'}`,
    `Cargo: ${clean(payload.cargo) || 'TBD'}`,
    `Weight / volume: ${clean(payload.weightVolume) || 'TBD'}`,
    `Ready date: ${clean(payload.readyDate) || 'TBD'}`,
    `Contact: ${clean(payload.contact) || 'TBD'}`,
    '',
    `Notes: ${clean(payload.notes) || 'None'}`,
    '',
    `Language: ${languageName(payload)}`,
    `Source: ${sourcePage(payload).url}`,
  ].join('\n');
}

function buildHtml(payload: InquiryPayload) {
  const rows = [
    ['Name / 姓名', clean(payload.name) || 'TBD'],
    ['Company / 公司', clean(payload.company) || 'TBD'],
    ['POL / 起运港', clean(payload.pol) || 'TBD'],
    ['POD / 目的港', clean(payload.pod) || 'TBD'],
    ['Cargo / 货物', clean(payload.cargo) || 'TBD'],
    ['Weight / volume / 件重尺', clean(payload.weightVolume) || 'TBD'],
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
      <p style="color:#6b7280">Language: ${languageName(payload)}<br />Source: ${escapeHtml(sourcePage(payload).url)}</p>
    </div>
  `;
}

export async function POST(request: NextRequest) {
  let body: unknown;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: 'Invalid JSON body.' }, { status: 400 });
  }

  if (body === null || typeof body !== 'object' || Array.isArray(body)) {
    return NextResponse.json({ error: 'Invalid inquiry payload.' }, { status: 400 });
  }

  const payload = body as InquiryPayload;

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

  let response: Response;
  try {
    response = await fetch('https://api.resend.com/emails', {
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
      signal: AbortSignal.timeout(20_000),
    });
  } catch {
    return NextResponse.json({ error: 'Email provider is unavailable.' }, { status: 502 });
  }

  if (!response.ok) {
    return NextResponse.json(
      { error: 'Email provider rejected the request.' },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}
