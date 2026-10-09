/**
 * Contact brief: shared field definitions and validation, used by the form
 * (client) and by the /api/contato endpoint (server).
 */
export type Brief = {
  nome: string;
  email: string;
  empresa: string;
  tipo: string[];
  orcamento: string;
  prazo: string;
  contexto: string;
  sucesso: string;
};

const LIMITS: Record<keyof Omit<Brief, 'tipo'>, number> = {
  nome: 120,
  email: 200,
  empresa: 200,
  orcamento: 60,
  prazo: 60,
  contexto: 5000,
  sucesso: 2000,
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/** Normalizes raw input into a Brief and lists the invalid fields. */
export function parseBrief(input: Record<string, unknown>): { brief: Brief; errors: (keyof Brief)[] } {
  const str = (k: keyof typeof LIMITS) => String(input[k] ?? '').trim().slice(0, LIMITS[k]);
  const tipoRaw = input.tipo;
  const tipo = (Array.isArray(tipoRaw) ? tipoRaw : tipoRaw ? [tipoRaw] : [])
    .map((v) => String(v).trim().slice(0, 60))
    .filter(Boolean)
    .slice(0, 10);

  const brief: Brief = {
    nome: str('nome'),
    email: str('email'),
    empresa: str('empresa'),
    tipo,
    orcamento: str('orcamento'),
    prazo: str('prazo'),
    contexto: str('contexto'),
    sucesso: str('sucesso'),
  };

  const errors: (keyof Brief)[] = [];
  if (!brief.nome) errors.push('nome');
  if (!EMAIL_RE.test(brief.email)) errors.push('email');
  if (!brief.contexto) errors.push('contexto');
  return { brief, errors };
}

/** Plain-text summary (email body and mailto fallback). */
export function briefToText(b: Brief): string {
  const dash = (v: string) => v || '—';
  return [
    'Novo briefing enviado pelo site',
    '—',
    `Nome: ${dash(b.nome)}`,
    `Email: ${dash(b.email)}`,
    `Empresa / cargo: ${dash(b.empresa)}`,
    `Tipo de projeto: ${b.tipo.join(', ') || '—'}`,
    `Orçamento estimado: ${dash(b.orcamento)}`,
    `Quando começar: ${dash(b.prazo)}`,
    '',
    '— O projeto em um parágrafo —',
    dash(b.contexto),
    '',
    '— Como saber que deu certo —',
    dash(b.sucesso),
  ].join('\n');
}

export const briefSubject = (b: Brief) => `Briefing · ${b.nome || 'novo contato'}`;
