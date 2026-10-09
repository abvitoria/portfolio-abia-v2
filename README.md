# Portfólio · Ábia Bognola

Portfólio de Product Design (UX/UI) feito com [Astro](https://astro.build).
As páginas são geradas como HTML estático. Só o formulário de contato roda no servidor, como uma função serverless.

## Comandos

| Comando           | O que faz                                        |
| ----------------- | ------------------------------------------------ |
| `npm install`     | Instala as dependências                          |
| `npm run dev`     | Servidor local em `http://localhost:4321`        |
| `npm run dev:stop` | Para um servidor de dev rodando em segundo plano |
| `npm run dev:status` | Mostra se há um servidor de dev rodando        |
| `npm run build`   | Gera o site de produção (`.vercel/output`)       |
| `npm run preview` | Serve o build localmente                         |
| `npm run check`   | Checagem de tipos (Astro + TypeScript)           |

## Estrutura

```
src/
├── assets/            Imagens (otimizadas no build para WebP + tamanhos responsivos)
│   └── retrato/       Coloque aqui a foto de retrato (aparece na Home e no Sobre)
├── components/
│   ├── layout/        Header, footer, skip link, fundo animado
│   ├── ui/            Biblioteca de componentes base (Chip, Button, Kicker, HeroTop,
│   │                  PageHero, SectionNav, SignOff, Tag, BgNum, DotLine, Portrait)
│   ├── home/          Seções da Home
│   ├── cases-list/    Linha da página /cases
│   ├── contact/       Canais e formulário de briefing
│   ├── about/         Componentes da página Sobre
│   └── case/          Blocos de case study (CaseHero, CaseIntro, CaseSection,
│       │              CaseStep, CaseFigure, Lightbox, listas, CTA…)
│       └── <slug>/    Componentes exclusivos de cada case
├── data/              Conteúdo estruturado (cases, sobre, site, i18n)
├── layouts/           BaseLayout (toda página) e CaseLayout (cases)
├── lib/               Lógica compartilhada (validação do briefing)
├── pages/             Rotas: /, /cases/, /cases/<slug>/, /sobre/, /contato/, /api/contato
├── scripts/           JS do cliente (PT/EN, reveal, animação de palavras, spotlight)
└── styles/            Biblioteca de CSS
    ├── tokens.css     Cores, tipografia, espaçamento, raios, sombras, motion
    ├── base.css       Reset e padrões de elementos
    ├── typography.css .mono, .display, .label, .lead…
    ├── layout.css     .wrap, .grid12
    ├── motion.css     .rv (reveal ao rolar), .kin (palavras)
    ├── global.css     Importa os arquivos acima (carregado por BaseLayout)
    └── case.css       Padrões editoriais dos cases (carregado por CaseLayout)
```

Cada componente `.astro` carrega o próprio CSS (com escopo). As classes globais reutilizáveis ficam em `src/styles/`. Para mudar uma cor ou fonte no site inteiro, edite `tokens.css`.

### Adicionar um case

1. Coloque as imagens em `src/assets/<slug>/` e a capa em `src/assets/covers/`.
2. Adicione a entrada em `src/data/cases.ts`. Ela aparece sozinha na Home, em `/cases` e na navegação flutuante.
3. Crie `src/pages/cases/<slug>.astro` usando `CaseLayout` e os componentes de `src/components/case/`. O modelo mais simples é `pdv.astro`.

### Idiomas (PT/EN)

O conteúdo é renderizado em português. A versão em inglês fica no atributo `data-en` (ou `data-en-placeholder`), e o botão PT/EN troca os textos sem recarregar a página (`src/scripts/i18n.ts`).

## Formulário de contato (e-mail)

O briefing em `/contato` envia um POST para `/api/contato`, que manda o e-mail via [Resend](https://resend.com).

1. Crie uma conta no Resend e gere uma API key.
2. (Recomendado) Verifique seu domínio no Resend para enviar de um endereço próprio.
3. Configure as variáveis de ambiente (localmente em `.env`, veja `.env.example`; na Vercel em *Settings → Environment Variables*):

| Variável             | Exemplo                                    |
| -------------------- | ------------------------------------------ |
| `RESEND_API_KEY`     | `re_xxx…`                                  |
| `CONTACT_TO_EMAIL`   | `abiabognola14@gmail.com`                  |
| `CONTACT_FROM_EMAIL` | `Portfólio <contato@seudominio.com>`       |

Sem a chave, o endpoint responde 503 e o formulário oferece enviar pelo app de e-mail (mailto com o resumo preenchido). O formulário também tem um campo honeypot contra bots, e o servidor valida e limita o tamanho de cada campo.

## Deploy

O projeto está configurado para a **Vercel** (`@astrojs/vercel`): importe o repositório na Vercel e configure as variáveis acima. Para usar Netlify ou Cloudflare, troque o adapter em `astro.config.mjs` (`@astrojs/netlify` ou `@astrojs/cloudflare`).

As fontes (Poppins, Bebas Neue, JetBrains Mono) são baixadas no build e servidas pelo próprio site, então nenhuma requisição vai ao Google Fonts.
