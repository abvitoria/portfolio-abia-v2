/** Content for the About page (/sobre). */

export const numbers = [
  { value: '5', label: 'Anos em product design' },
  { value: '4', label: 'Setores atendidos <br><span class="ink">fintech · saúde · edtech · softhouse</span>' },
  { value: '6', label: 'Mentorias &amp; hackathons como mentora' },
  { value: 'MBA', label: 'Future-Centered Design · FIAP', accent: true },
];

export const process = [
  {
    label: 'Entender',
    sub: 'Conhecer quem usa',
    text: 'Entender as pessoas e o contexto antes de pensar em solução. Documentação, regras de negócio, chamados de suporte, conversas com quem usa ou com quem atende quem usa. <mark>O objetivo é saber o que a pessoa precisa fazer, não o que a tela deveria ter.</mark>',
  },
  {
    label: 'Definir',
    sub: 'Nomear o problema',
    text: 'Organizar o que foi levantado e transformar em um problema claro, com quem é afetado e por quê. Matriz CSD, mapeamento de perfis e de regras ajudam a separar certeza de suposição. <mark>Um problema bem definido evita resolver a coisa errada.</mark>',
  },
  {
    label: 'Idear',
    sub: 'Abrir antes de escolher',
    text: 'Gerar alternativas antes de decidir: fluxos diferentes, ordens diferentes, níveis de informação diferentes. Benchmark e conversa com o time de produto e desenvolvimento entram aqui. <mark>A escolha vem depois da comparação.</mark>',
  },
  {
    label: 'Prototipar',
    sub: 'Tornar a ideia concreta',
    text: 'Wireframes e wireflows de baixa fidelidade primeiro, para discutir estrutura sem se prender ao visual. Depois, alta fidelidade sobre o design system, com acessibilidade já considerada desde o início, não como acabamento.',
  },
  {
    label: 'Testar',
    sub: 'Aprender com o uso',
    text: 'Validar o protótipo com quem vai usar, quando possível, e acompanhar o produto depois da entrega. O que aparece no teste ou no uso real volta para as etapas anteriores. <mark>O processo não é uma linha reta: é um ciclo.</mark>',
  },
];

export const expertise = [
  {
    letter: 'A.',
    title: 'Descoberta',
    items: [
      'Entrevistas com P.O., suporte, negócio',
      'Matriz CSD',
      'Levantamento de dados de comportamento',
      'Auditoria de fluxos existentes',
      'Análise de concorrentes',
    ],
  },
  {
    letter: 'B.',
    title: 'Estrutura',
    items: ['Arquitetura de informação', 'User flow &amp; wireflow', 'Wireframes lo-fi', 'Design de interação', 'Documentação de fluxo'],
  },
  {
    letter: 'C.',
    title: 'Entrega',
    items: ['UI hi-fi navegável', 'Design system &amp; tokens', 'Mobile &amp; responsive', 'Acessibilidade WCAG', 'Handoff pra dev'],
  },
];

export const tools = ['Figma', 'FigJam', 'Notion', 'Miro', 'Adobe XD'];

export const companies = [
  { name: 'MEDME SAÚDE', period: '2025 · atual' },
  { name: '4US TECNOLOGIA', period: '2024 · 2025' },
  { name: 'APP FACILITA', period: '2023 · 2024' },
  { name: 'TRADEMASTER', period: '2022 · 2023' },
  { name: 'B9 SISTEMAS', period: '2022' },
  { name: 'ROIT BANK', period: '2021 · 2022' },
];

export const timeline = [
  {
    year: '2025',
    until: '— atual',
    role: 'Product Designer',
    current: true,
    company: 'MedMe Saúde',
    desc: 'Saúde corporativa e benefícios farmacêuticos — pesquisa, jornadas e prototipação alinhando negócio e experiência.',
  },
  { year: '2024', until: '— 2025', role: 'UX Designer', company: '4US Tecnologia', desc: 'Fluxos, interfaces e protótipos para produtos digitais.' },
  {
    year: '2023',
    until: '— 2024',
    role: 'UX Research',
    company: 'App Facilita',
    desc: 'Pesquisa qualitativa e quantitativa e testes de usabilidade — base para melhorias centradas no usuário.',
  },
  {
    year: '2022',
    until: '— 2023',
    role: 'Product Designer',
    company: 'Trademaster',
    desc: 'Protótipos hi-fi, jornadas, wireflows e design system em fluxos de crédito B2B.',
  },
  { year: '2022', role: 'Product Designer', company: 'B9 Sistemas', desc: 'Wireframes e protótipos em projetos com times multidisciplinares.' },
  {
    year: '2021',
    until: '— 2022',
    role: 'UX/UI Designer',
    company: 'ROIT Bank',
    desc: 'Protótipos e apoio aos times de design e marketing. Meu primeiro trabalho em produto.',
  },
];

export const education = [
  { period: '2024 — 2025', title: 'MBA · FIAP', desc: 'Future-Centered Design: UX, Inovação e Tecnologia.' },
  { period: '2022 — 2023', title: 'UX/UI · Design Circuit', desc: 'Formação prática em UX/UI Design.' },
  { period: '2021 — 2023', title: 'CST Marketing · UNINTER', desc: 'Tecnólogo em Marketing.' },
];

export const community = [
  'NASA Space Apps ’24',
  'NASA Space Apps ’25',
  'Startup 360',
  'Campus Party GO',
  'Correios · CP Nordeste',
  'Eleve · Hub Goiás',
];

export const craft = [
  {
    label: 'Pesquisa',
    text: 'Entrevistas com stakeholders, matriz CSD, análise de dado interno de comportamento, benchmark competitivo e mapeamento de perfis a partir de regra de negócio.',
  },
  {
    label: 'Estrutura',
    text: 'Arquitetura de informação, <strong>user flow &amp; wireflow</strong> documentados, wireframes de baixa fidelidade e validação cruzada antes de subir a fidelidade.',
  },
  {
    label: 'Protótipo',
    text: 'UI hi-fi navegável no Figma, com estados, validações e mensagens de apoio — pronto pra stakeholder testar e dev implementar.',
  },
  {
    label: 'Sistema',
    text: 'Style guide, tokens de cor e tipografia, componentes reutilizáveis e critérios de <strong>acessibilidade WCAG</strong> integrados ao componente, não adicionados no fim.',
  },
  {
    label: 'Documentação',
    text: 'Registro das decisões — evidência, escolha e intenção — organizado no formato que o time consome: página no Notion, comentário no Figma ou handoff estruturado.',
  },
  {
    label: 'Handoff',
    text: 'Especificação de comportamento, estados e responsividade. Acompanho o desenvolvimento para tirar dúvidas e revisar a implementação antes da entrega.',
  },
];
