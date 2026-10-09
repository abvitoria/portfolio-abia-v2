# Portfólio · Ábia Bognola

Portfólio de Product Design (UX/UI) feito com [Astro](https://astro.build).
Todas as páginas são geradas como HTML estático e publicadas no GitHub Pages:
**https://abvitoria.github.io/portfolio-abia-v2/**

## Comandos

| Comando           | O que faz                                        |
| ----------------- | ------------------------------------------------ |
| `npm install`     | Instala as dependências                          |
| `npm run dev`     | Servidor local em `http://localhost:4321`        |
| `npm run dev:stop` | Para um servidor de dev rodando em segundo plano |
| `npm run dev:status` | Mostra se há um servidor de dev rodando        |
| `npm run build`   | Gera o site de produção em `dist/`               |
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
├── lib/               Lógica compartilhada (briefing, links com base path)
├── pages/             Rotas: /, /cases/, /cases/<slug>/, /sobre/, /contato/
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

## Links internos

O site é servido em uma subpasta (`/portfolio-abia-v2/`). Todo link interno passa por `url()` de `src/lib/url.ts`:

```astro
<a href={url('/cases/')}>Cases</a>
```

Imagens importadas de `src/assets/` já recebem o prefixo automaticamente.

## Deploy (GitHub Pages)

O workflow `.github/workflows/deploy.yml` builda e publica o site a cada push na `master`. Também é possível rodar manualmente em *Actions → Deploy to GitHub Pages → Run workflow*.

Configuração única: *Settings → Pages → Build and deployment → Source* = **GitHub Actions**.

**Domínio próprio:** configure em *Settings → Pages → Custom domain*, depois troque `site` pelo domínio e remova `base` em `astro.config.mjs`.

As fontes (Bebas Neue e Inter) são baixadas no build e servidas pelo próprio site, então nenhuma requisição vai ao Google Fonts.
