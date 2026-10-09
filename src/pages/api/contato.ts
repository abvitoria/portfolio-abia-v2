/**
 * POST /api/contato — receives the brief form and emails it via Resend.
 * Runs on demand (serverless); the rest of the site is static.
 */
import type { APIRoute } from 'astro';
import { CONTACT_FROM_EMAIL, CONTACT_TO_EMAIL, RESEND_API_KEY } from 'astro:env/server';
import { briefSubject, briefToText, parseBrief } from '@/lib/brief';

export const prerender = false;

const json = (status: number, body: Record<string, unknown>) =>
  new Response(JSON.stringify(body), { status, headers: { 'Content-Type': 'application/json' } });

const escapeHtml = (s: string) =>
  s.replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]!);

export const POST: APIRoute = async ({ request }) => {
  let data: Record<string, unknown>;
  try {
    data = await request.json();
  } catch {
    return json(400, { ok: false, error: 'invalid_body' });
  }

  // Honeypot: real visitors never fill this hidden field.
  if (String(data.website ?? '').trim()) return json(200, { ok: true });

  const { brief, errors } = parseBrief(data);
  if (errors.length) return json(422, { ok: false, error: 'invalid_fields', fields: errors });

  if (!RESEND_API_KEY) {
    console.error('[contato] RESEND_API_KEY is not set');
    return json(503, { ok: false, error: 'not_configured' });
  }

  const text = briefToText(brief);
  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: { Authorization: `Bearer ${RESEND_API_KEY}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({
      from: CONTACT_FROM_EMAIL,
      to: [CONTACT_TO_EMAIL],
      reply_to: brief.email,
      subject: briefSubject(brief),
      text,
      html: `<pre style="font:14px/1.6 ui-monospace,monospace;white-space:pre-wrap">${escapeHtml(text)}</pre>`,
    }),
  });

  if (!res.ok) {
    console.error('[contato] Resend error', res.status, await res.text());
    return json(502, { ok: false, error: 'send_failed' });
  }
  return json(200, { ok: true });
};
