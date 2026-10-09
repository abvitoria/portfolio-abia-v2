/** Content for the About page (/sobre). */
import { t, type L } from './i18n';

export const numbers: { value: string; label: L; accent?: boolean }[] = [
  { value: '5', label: t('Anos em product design', 'Years in product design') },
  {
    value: '4',
    label: t(
      'Setores atendidos <br><span class="ink">fintech · saúde · edtech · softhouse</span>',
      'Industries served <br><span class="ink">fintech · health · edtech · software house</span>',
    ),
  },
  { value: '6', label: t('Mentorias &amp; hackathons como mentora', 'Mentoring programs &amp; hackathons as a mentor') },
  { value: 'MBA', label: t('Future-Centered Design · FIAP'), accent: true },
];

export const process: { label: L; sub: L; text: L }[] = [
  {
    label: t('Entender', 'Understand'),
    sub: t('Conhecer quem usa', 'Get to know the users'),
    text: t(
      'Entender as pessoas e o contexto antes de pensar em solução. Documentação, regras de negócio, chamados de suporte, conversas com quem usa ou com quem atende quem usa. <mark>O objetivo é saber o que a pessoa precisa fazer, não o que a tela deveria ter.</mark>',
      'Understand people and context before thinking about a solution. Documentation, business rules, support tickets, conversations with the people who use the product or with those who serve them. <mark>The goal is to know what people need to do, not what the screen should have.</mark>',
    ),
  },
  {
    label: t('Definir', 'Define'),
    sub: t('Nomear o problema', 'Name the problem'),
    text: t(
      'Organizar o que foi levantado e transformar em um problema claro, com quem é afetado e por quê. Matriz CSD, mapeamento de perfis e de regras ajudam a separar certeza de suposição. <mark>Um problema bem definido evita resolver a coisa errada.</mark>',
      'Organize what was gathered and turn it into a clear problem: who is affected and why. A CSD matrix and mapping profiles and rules help separate certainties from assumptions. <mark>A well-defined problem keeps you from solving the wrong thing.</mark>',
    ),
  },
  {
    label: t('Idear', 'Ideate'),
    sub: t('Abrir antes de escolher', 'Open up before choosing'),
    text: t(
      'Gerar alternativas antes de decidir: fluxos diferentes, ordens diferentes, níveis de informação diferentes. Benchmark e conversa com o time de produto e desenvolvimento entram aqui. <mark>A escolha vem depois da comparação.</mark>',
      'Generate alternatives before deciding: different flows, different orders, different levels of information. Benchmarking and conversations with the product and development teams come in here. <mark>The choice comes after the comparison.</mark>',
    ),
  },
  {
    label: t('Prototipar', 'Prototype'),
    sub: t('Tornar a ideia concreta', 'Make the idea concrete'),
    text: t(
      'Wireframes e wireflows de baixa fidelidade primeiro, para discutir estrutura sem se prender ao visual. Depois, alta fidelidade sobre o design system, com acessibilidade já considerada desde o início, não como acabamento.',
      'Low-fidelity wireframes and wireflows first, to discuss structure without getting attached to visuals. Then high fidelity on top of the design system, with accessibility considered from the start, not as a finishing touch.',
    ),
  },
  {
    label: t('Testar', 'Test'),
    sub: t('Aprender com o uso', 'Learn from use'),
    text: t(
      'Validar o protótipo com quem vai usar, quando possível, e acompanhar o produto depois da entrega. O que aparece no teste ou no uso real volta para as etapas anteriores. <mark>O processo não é uma linha reta: é um ciclo.</mark>',
      'Validate the prototype with the people who will use it, when possible, and follow the product after delivery. What comes up in testing or real use feeds back into the earlier stages. <mark>The process is not a straight line: it is a cycle.</mark>',
    ),
  },
];

export const expertise: { letter: string; title: L; items: L[] }[] = [
  {
    letter: 'A.',
    title: t('Descoberta', 'Discovery'),
    items: [
      t('Entrevistas com P.O., suporte, negócio', 'Interviews with the PO, support and business'),
      t('Matriz CSD', 'CSD matrix'),
      t('Levantamento de dados de comportamento', 'Behavioral data gathering'),
      t('Auditoria de fluxos existentes', 'Audit of existing flows'),
      t('Análise de concorrentes', 'Competitor analysis'),
    ],
  },
  {
    letter: 'B.',
    title: t('Estrutura', 'Structure'),
    items: [
      t('Arquitetura de informação', 'Information architecture'),
      t('User flow &amp; wireflow'),
      t('Wireframes lo-fi', 'Lo-fi wireframes'),
      t('Design de interação', 'Interaction design'),
      t('Documentação de fluxo', 'Flow documentation'),
    ],
  },
  {
    letter: 'C.',
    title: t('Entrega', 'Delivery'),
    items: [
      t('UI hi-fi navegável', 'Clickable hi-fi UI'),
      t('Design system &amp; tokens'),
      t('Mobile &amp; responsive'),
      t('Acessibilidade WCAG', 'WCAG accessibility'),
      t('Handoff pra dev', 'Developer handoff'),
    ],
  },
];

export const tools = ['Figma', 'FigJam', 'Notion', 'Miro', 'Adobe XD'];

export const companies: { name: string; period: L }[] = [
  { name: 'MEDME SAÚDE', period: t('2025 · atual', '2025 · present') },
  { name: '4US TECNOLOGIA', period: t('2024 · 2025') },
  { name: 'APP FACILITA', period: t('2023 · 2024') },
  { name: 'TRADEMASTER', period: t('2022 · 2023') },
  { name: 'B9 SISTEMAS', period: t('2022') },
  { name: 'ROIT BANK', period: t('2021 · 2022') },
];

export const timeline: { year: string; until?: L; role: string; current?: boolean; company: string; desc: L }[] = [
  {
    year: '2025',
    until: t('— atual', '— present'),
    role: 'Product Designer',
    current: true,
    company: 'MedMe Saúde',
    desc: t(
      'Saúde corporativa e benefícios farmacêuticos — pesquisa, jornadas e prototipação alinhando negócio e experiência.',
      'Corporate health and pharmacy benefits — research, journeys and prototyping that align business and experience.',
    ),
  },
  {
    year: '2024',
    until: t('— 2025'),
    role: 'UX Designer',
    company: '4US Tecnologia',
    desc: t('Fluxos, interfaces e protótipos para produtos digitais.', 'Flows, interfaces and prototypes for digital products.'),
  },
  {
    year: '2023',
    until: t('— 2024'),
    role: 'UX Research',
    company: 'App Facilita',
    desc: t(
      'Pesquisa qualitativa e quantitativa e testes de usabilidade — base para melhorias centradas no usuário.',
      'Qualitative and quantitative research and usability testing — the basis for user-centered improvements.',
    ),
  },
  {
    year: '2022',
    until: t('— 2023'),
    role: 'Product Designer',
    company: 'Trademaster',
    desc: t(
      'Protótipos hi-fi, jornadas, wireflows e design system em fluxos de crédito B2B.',
      'Hi-fi prototypes, journeys, wireflows and a design system for B2B credit flows.',
    ),
  },
  {
    year: '2022',
    role: 'Product Designer',
    company: 'B9 Sistemas',
    desc: t(
      'Wireframes e protótipos em projetos com times multidisciplinares.',
      'Wireframes and prototypes on projects with multidisciplinary teams.',
    ),
  },
  {
    year: '2021',
    until: t('— 2022'),
    role: 'UX/UI Designer',
    company: 'ROIT Bank',
    desc: t(
      'Protótipos e apoio aos times de design e marketing. Meu primeiro trabalho em produto.',
      'Prototypes and support for the design and marketing teams. My first job in product.',
    ),
  },
];

export const education: { period: string; title: string; desc: L }[] = [
  {
    period: '2024 — 2025',
    title: 'MBA · FIAP',
    desc: t('Future-Centered Design: UX, Inovação e Tecnologia.', 'Future-Centered Design: UX, Innovation and Technology.'),
  },
  { period: '2022 — 2023', title: 'UX/UI · Design Circuit', desc: t('Formação prática em UX/UI Design.', 'Hands-on UX/UI Design program.') },
  { period: '2021 — 2023', title: 'CST Marketing · UNINTER', desc: t('Tecnólogo em Marketing.', 'Associate degree in Marketing.') },
];

export const community = [
  'NASA Space Apps ’24',
  'NASA Space Apps ’25',
  'Startup 360',
  'Campus Party GO',
  'Correios · CP Nordeste',
  'Eleve · Hub Goiás',
];

export const craft: { label: L; text: L }[] = [
  {
    label: t('Pesquisa', 'Research'),
    text: t(
      'Entrevistas com stakeholders, matriz CSD, análise de dado interno de comportamento, benchmark competitivo e mapeamento de perfis a partir de regra de negócio.',
      'Stakeholder interviews, CSD matrix, analysis of internal behavioral data, competitive benchmarking and profile mapping based on business rules.',
    ),
  },
  {
    label: t('Estrutura', 'Structure'),
    text: t(
      'Arquitetura de informação, <strong>user flow &amp; wireflow</strong> documentados, wireframes de baixa fidelidade e validação cruzada antes de subir a fidelidade.',
      'Information architecture, documented <strong>user flows &amp; wireflows</strong>, low-fidelity wireframes and cross-validation before raising the fidelity.',
    ),
  },
  {
    label: t('Protótipo', 'Prototype'),
    text: t(
      'UI hi-fi navegável no Figma, com estados, validações e mensagens de apoio — pronto pra stakeholder testar e dev implementar.',
      'Clickable hi-fi UI in Figma, with states, validations and helper messages — ready for stakeholders to try and developers to build.',
    ),
  },
  {
    label: t('Sistema', 'System'),
    text: t(
      'Style guide, tokens de cor e tipografia, componentes reutilizáveis e critérios de <strong>acessibilidade WCAG</strong> integrados ao componente, não adicionados no fim.',
      'Style guide, color and type tokens, reusable components and <strong>WCAG accessibility</strong> criteria built into each component, not added at the end.',
    ),
  },
  {
    label: t('Documentação', 'Documentation'),
    text: t(
      'Registro das decisões — evidência, escolha e intenção — organizado no formato que o time consome: página no Notion, comentário no Figma ou handoff estruturado.',
      'A record of decisions — evidence, choice and intent — organized in the format the team actually uses: a Notion page, a Figma comment or a structured handoff.',
    ),
  },
  {
    label: t('Handoff'),
    text: t(
      'Especificação de comportamento, estados e responsividade. Acompanho o desenvolvimento para tirar dúvidas e revisar a implementação antes da entrega.',
      'Specs for behavior, states and responsiveness. I follow development to answer questions and review the implementation before release.',
    ),
  },
];
