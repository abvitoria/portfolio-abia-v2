/**
 * Case catalogue — feeds the home accordion, the /cases list and the
 * section pill. Add a case here and it shows up everywhere.
 */
import type { ImageMetadata } from 'astro';
import { t, type L } from './i18n';
import { url } from '@/lib/url';
import capaTrade from '@/assets/covers/capa-trade.png';
import capaVitalis from '@/assets/covers/capa-vitalis.png';
import capaStartdev from '@/assets/covers/capa-startdev.png';
import capaMedme from '@/assets/covers/capa-medme.png';
import capaPdv from '@/assets/covers/capa-pdv.png';
import capaPulse from '@/assets/covers/capa-pulse.png';

export type CaseEntry = {
  slug: string;
  /** Short label for compact navigation (section pill). */
  short: string;
  /** Name as shown in the home accordion. */
  name: L;
  cover: ImageMetadata;
  coverAlt: string;
  /** Home accordion */
  home: {
    headline: L;
    meta: L;
    problem: L;
    solution: L;
    result: L;
    role: string;
  };
  /** /cases list row */
  row: {
    title: L;
    /** Labeled "Contexto" / "Minha atuação" texts; replace body + beat when set. */
    context?: L;
    myRole?: L;
    /** Stat panel with several numbers; replaces stat + actors when set. */
    panel?: { title: L; stats: { value: string; label: L }[]; caption: L };
    meta: L;
    body: L;
    beat: L;
    tags: L[];
    /** Stat frame; `title` is an optional label above the number. */
    stat: { value: string; caption: L; title?: L };
    actors: L[];
    status: L;
  };
};

const designMe = t('Design — eu', 'Design — me');

export const cases: CaseEntry[] = [
  {
    slug: 'trade',
    short: 'Trade+',
    name: t('TRADE+'),
    cover: capaTrade,
    coverAlt: 'Tela de cadastro do Trade+',
    home: {
      headline: t('Um cadastro de 30 telas que virou duas etapas', 'A 30-screen sign-up cut to two steps'),
      meta: t('Fintech · App mobile · 2023', 'Fintech · Mobile app · 2023'),
      problem: t(
        'Varejistas abandonavam o cadastro antes de concluí-lo. O processo tinha cerca de 30 telas, distribuídas em uma jornada que nem mesmo as equipes internas conseguiam visualizar integralmente.',
        'Retailers were abandoning the registration process before completing it. The process involved approximately 30 screens, spread across a journey that even internal teams struggled to fully understand.',
      ),
      solution: t(
        'Mapeei a jornada completa e conversei com diferentes áreas para questionar a necessidade de cada informação solicitada. A partir da análise das regras de negócio e das necessidades dos usuários, reestruturei o cadastro em duas etapas, priorizando as informações essenciais e reduzindo a complexidade da experiência.',
        'I mapped the entire registration journey and collaborated with different teams to reassess the necessity of each requested field. By analyzing business rules and user needs, I redesigned the registration process into two stages, prioritizing essential information and reducing complexity.',
      ),
      result: t(
        'Uma jornada de cadastro mais simples, organizada em duas etapas, com regras documentadas e maior clareza para usuários e equipes envolvidas.',
        'A simplified, two-stage registration journey with documented business rules and greater clarity for both users and internal teams.',
      ),
      role: 'Product Designer · Research',
    },
    row: {
      context: t(
        'O que começou como uma migração de Adobe XD para Figma revelou um desafio maior: o cadastro acumulava mais de 30 telas, informações pouco justificadas e regras de negócio distribuídas entre diferentes áreas. A complexidade da jornada dificultava tanto a conclusão do cadastro quanto a compreensão do processo pelas equipes internas.',
        'What started as a migration from Adobe XD to Figma revealed a much bigger challenge: the retailer registration process had grown to over 30 screens, with unnecessary information requests and business rules scattered across different teams. This complexity made it difficult for retailers to complete their registration and for internal teams to fully understand the journey.',
      ),
      myRole: t(
        'Mapeei o fluxo completo e trabalhei com produto, desenvolvimento, marketing e suporte para compreender as regras existentes e identificar oportunidades de simplificação. A partir dessa análise, reorganizei o cadastro em duas etapas, priorizando as informações essenciais e documentando as decisões para alinhar o entendimento entre as equipes.',
        'I mapped the entire registration flow and collaborated with product, development, marketing, and support teams to understand existing business rules and identify opportunities for simplification. Based on these findings, I redesigned the registration process into two stages, prioritizing essential information and documenting design decisions to establish a shared understanding across teams.',
      ),
      panel: {
        title: t('Redesign da jornada de cadastro', 'Registration journey redesign'),
        stats: [
          { value: '30<span class="k">+</span>', label: t('Telas no fluxo de cadastro original', 'Screens in the original registration flow') },
          { value: '02', label: t('Etapas na nova jornada', 'Stages in the redesigned journey') },
        ],
        caption: t(
          'Mapeamento da jornada, revisão das regras de negócio e documentação do novo fluxo de cadastro.',
          'Mapping the user journey, reviewing business rules, and documenting the new registration flow.',
        ),
      },
      title: t('TRADE<span class="k">+</span>'),
      meta: t('Fintech <span>·</span> Trademaster <span>·</span> 2022 — 2023', 'Fintech <span>·</span> Trademaster <span>·</span> 2022 — 2023'),
      body: t(
        'Uma migração de Adobe XD pra Figma virou uma reconstrução da visão do produto: o cadastro de <b>30+ telas</b> tinha sido feito por devs sem processo de UX — Lorem Ipsum em produção, regras acumuladas por várias mãos.',
        "A migration from Adobe XD to Figma turned into a reconstruction of the product's vision: the <b>30+ screens</b> registration had been built by devs with no UX process — Lorem Ipsum in production, rules stacked by many hands.",
      ),
      beat: t(
        'Descoberta com P.O., dev, marketing e suporte via matriz CSD. Redesenho em duas etapas, documentação completa do wireflow e novas funcionalidades pra dar motivo de uso recorrente.',
        'Discovery with P.O., dev, marketing and support via CSD matrix. Two-step registration redesign, complete wireflow documentation, and new features to give the app a reason to come back.',
      ),
      tags: [t('Descoberta', 'Discovery'), t('Matriz CSD'), t('Wireflow'), t('Documentação', 'Documentation')],
      stat: { value: '30<span class="k">+</span>', caption: t('telas no cadastro original', 'screens in the original sign-up') },
      actors: [t('P.O.'), t('Desenvolvimento', 'Development'), t('Marketing'), t('Suporte', 'Support')],
      status: t('case · publicado', 'case · published'),
    },
  },
  {
    slug: 'vitalis',
    short: 'Vitalis',
    name: t('VITALIS'),
    cover: capaVitalis,
    coverAlt: 'Início do paciente na Vitalis Saúde',
    home: {
      headline: t(
        'Tornando o acesso à saúde pública mais simples e acessível.',
        'Making public healthcare more accessible and easier to navigate.',
      ),
      meta: t('Saúde pública · Web + mobile · 2026', 'Public healthcare · Web + mobile · 2026'),
      problem: t(
        'A dependência de atendimentos presenciais para realizar atividades administrativas, como agendar consultas e solicitar receitas, criava barreiras no acesso aos serviços de saúde. O desafio era pensar em uma experiência digital que atendesse pacientes, profissionais de saúde e equipes administrativas, considerando diferentes níveis de familiaridade com tecnologia.',
        'The reliance on in-person visits for administrative tasks, such as scheduling appointments and requesting prescriptions, created barriers to accessing healthcare services. The challenge was to design a digital experience that could serve patients, healthcare professionals, and administrative staff, while accommodating different levels of digital literacy.',
      ),
      solution: t(
        'Estruturei as jornadas e permissões de três perfis de usuários, organizando funcionalidades de acordo com suas necessidades e responsabilidades. Desenvolvi uma interface responsiva, com atenção à clareza das informações, à acessibilidade e à consistência da experiência entre dispositivos.',
        'I structured user journeys and access permissions for three distinct user roles, organizing features around their needs and responsibilities. I designed a responsive interface with a focus on information clarity, accessibility, and consistency across devices.',
      ),
      result: t(
        'Uma proposta de plataforma integrada para pacientes, médicos e equipes administrativas, com fluxos definidos para web e mobile, pensando em mobile first, e uma linguagem visual consistente entre as diferentes jornadas.',
        'A mobile-first, integrated healthcare platform concept for patients, doctors, and administrative staff, with defined workflows for web and mobile and a consistent visual language across different user journeys.',
      ),
      role: 'UX/UI · Research · Style guide',
    },
    row: {
      title: t('VITALIS<br/>SAÚDE', 'VITALIS<br/>HEALTH'),
      context: t(
        'Uma plataforma de telemedicina voltada à rede pública, com experiências para pacientes, médicos e secretárias. O desafio era organizar diferentes responsabilidades, tarefas e permissões de acesso em uma experiência clara e consistente para web e mobile.',
        'A telemedicine platform designed for the public healthcare system, with dedicated experiences for patients, doctors, and administrative staff. The challenge was to organize different responsibilities, tasks, and access permissions into a clear, consistent experience across web and mobile.',
      ),
      myRole: t(
        'A partir da documentação e das regras de negócio fornecidas pelo cliente, estruturei as jornadas e permissões de cada perfil. Desenvolvi os fluxos, wireframes e interfaces com uma abordagem mobile-first, considerando acessibilidade desde as primeiras etapas e estabelecendo padrões visuais para manter a consistência entre dispositivos.',
        "Using the client's documentation and business rules, I structured the user journeys and access permissions for each role. I designed the flows, wireframes, and interfaces using a mobile-first approach, considering accessibility from the early stages and establishing visual patterns to ensure consistency across devices.",
      ),
      meta: t('Saúde pública <span>·</span> Cliente externo <span>·</span> ≈ 1 mês', 'Public healthcare <span>·</span> External client <span>·</span> ≈ 1 month'),
      body: t(
        'Plataforma de telemedicina para postos de saúde com <b>três perfis de usuário</b> (paciente, médico e secretária) em web e mobile — cada um com proficiência digital e necessidade bem diferente.',
        'Telemedicine platform for public health clinics with <b>three user profiles</b> (patient, doctor and receptionist) on web and mobile — each with a different digital fluency and need.',
      ),
      beat: t(
        'Mapeamento de perfis por documentação e regras de negócio, style guide, wireframes lo-fi e alta fidelidade com acessibilidade considerada desde o wireframe. Os perfis vieram da documentação do cliente, sem pesquisa direta com usuário final.',
        "Profile mapping from documentation and business rules, style guide, low-fidelity wireframes and hi-fi with accessibility as a base — not decoration. Profiles came from the client's documentation, without direct user research.",
      ),
      tags: [t('Multiperfil', 'Multi-profile'), t('Regras de negócio', 'Business rules'), t('Acessibilidade', 'Accessibility'), t('Teleconsulta', 'Telemedicine')],
      stat: { value: '<span class="k">3</span>', caption: t('perfis de acesso', 'access profiles') },
      actors: [t('Paciente', 'Patient'), t('Médico', 'Doctor'), t('Secretária', 'Receptionist')],
      status: t('case · publicado', 'case · published'),
    },
  },
  {
    slug: 'startdev',
    short: 'StartDev',
    name: t('STARTDEV'),
    cover: capaStartdev,
    coverAlt: 'Telas da StartDev em dark mode',
    home: {
      headline: t(
        'Uma experiência de aprendizagem que conecta teoria, prática e comunidade.',
        'A learning experience that connects theory, practice, and community.',
      ),
      meta: t('Edtech · Web + mobile · 2024', 'Ed-tech · Web + mobile · 2024'),
      problem: t(
        'Quem aprende a programar sozinho fica sem prática guiada e sem ter a quem perguntar.',
        'People learning to code on their own lack guided practice and someone to ask.',
      ),
      solution: t(
        'Estruturei uma experiência de aprendizagem que integra conteúdos teóricos, exercícios práticos e espaços de interação entre estudantes. Organizei as jornadas de navegação para facilitar o acesso às atividades e acompanhar a evolução dos estudos, desenvolvendo uma interface consistente para web e mobile, com opções de tema claro e escuro.',
        'I designed a learning experience that brings together theoretical content, hands-on exercises, and spaces for student interaction. I structured the user journeys to make learning activities easier to access and help students track their progress, creating a consistent interface across web and mobile, with both light and dark modes.',
      ),
      result: t(
        'Aulas, atividades, fórum e gamificação entregues em web e mobile, em tema claro e escuro.',
        'Lessons, exercises, forum and gamification delivered on web and mobile, in light and dark themes.',
      ),
      role: 'UX/UI Designer',
    },
    row: {
      title: t('STARTDEV'),
      context: t(
        'Uma plataforma de ensino de programação que combina conteúdos teóricos, atividades práticas, gamificação e interação entre estudantes. O desafio era organizar essas diferentes experiências em um produto intuitivo e consistente, permitindo que os usuários transitassem entre aprendizado, prática e comunidade em web e mobile.',
        'A programming education platform that combines theoretical content, hands-on exercises, gamification, and student interaction. The challenge was to bring these different experiences together into an intuitive, consistent product, allowing users to move seamlessly between learning, practice, and community across web and mobile.',
      ),
      myRole: t(
        'Estruturei as jornadas de navegação e organizei as funcionalidades para facilitar o acesso aos conteúdos, exercícios e espaços de interação. A partir da identidade visual existente, desenvolvi padrões de interface, validei wireframes com o cliente e projetei as experiências para web e mobile, contemplando temas claro e escuro.',
        'I structured the user journeys and organized features to make learning materials, exercises, and community spaces easier to access. Building on the existing visual identity, I established interface patterns, validated wireframes with the client, and designed the web and mobile experiences, including light and dark modes.',
      ),
      meta: t('Ed-tech <span>·</span> Cliente externo <span>·</span> ≈ 20 dias', 'Ed-tech <span>·</span> External client <span>·</span> ≈ 20 days'),
      body: t(
        'Plataforma de ensino para devs com comunidade colaborativa e gamificação por pontos. Prazo real: <b>cerca de 20 dias</b> pra entregar web + mobile — em paralelo a outros projetos e apoiando uma estagiária.',
        'Learning platform for developers with collaborative community and points-based gamification. Real deadline: <b>about 20 days</b> to deliver web + mobile — while running other projects and supporting an intern.',
      ),
      beat: t(
        'Cliente já tinha marca, paleta e fontes. Primeiro passo: style guide pra padronizar; depois vieram user flow, wireframes lo-fi validados com o cliente e alta fidelidade em dark mode (público desenvolvedor).',
        'Client already had brand, palette and fonts. First move was a style guide to standardize; then came user flow, lo-fi wireframes validated with the client and hi-fi in dark mode (developer audience).',
      ),
      tags: [t('Prazo apertado', 'Tight deadline'), t('Style guide'), t('Gamificação', 'Gamification'), t('Dark mode')],
      stat: {
        title: t('Experiência multiplataforma', 'Cross-platform experience'),
        value: '02',
        caption: t('Experiências — web e mobile', 'Web & mobile experiences'),
      },
      actors: [t('Aprendizagem', 'Learning'), t('Prática e gamificação', 'Practice & gamification'), t('Comunidade', 'Community')],
      status: t('case · publicado', 'case · published'),
    },
  },
  {
    slug: 'medme-rh',
    short: 'MedMe RH',
    name: t('MEDME RH', 'MEDME HR PORTAL'),
    cover: capaMedme,
    coverAlt: 'Capa do case MedMe Portal do RH',
    home: {
      headline: t(
        'Modernizando a gestão de benefícios corporativos por meio de uma experiência mais integrada.',
        'Modernizing corporate benefits management through a more integrated user experience.',
      ),
      meta: t('Benefícios · Web · Portal B2B', 'Benefits · Web · B2B portal'),
      problem: t(
        'Com a evolução do portal, diferentes funcionalidades passaram a apresentar padrões inconsistentes de navegação, organização das informações e interação. Essa fragmentação tornava a experiência administrativa mais complexa, especialmente em atividades de consulta, acompanhamento e gestão dos benefícios.',
        'As the portal evolved, different features developed inconsistent patterns for navigation, information organization, and interaction. This fragmentation made administrative tasks more complex, particularly when accessing information, monitoring activities, and managing employee benefits.',
      ),
      solution: t(
        'Reestruturei as principais jornadas do portal, revisando a hierarquia das informações, a navegação e os componentes de interface. A modernização buscou unificar padrões de interação, simplificar operações administrativas e tornar dados e funcionalidades mais acessíveis e fáceis de localizar.',
        'I restructured the portal\'s main user journeys, refining information hierarchy, navigation, and interface components. The redesign focused on establishing consistent interaction patterns, simplifying administrative workflows, and making information and features easier to access and find.',
      ),
      result: t(
        'Uma experiência mais consistente entre as diferentes áreas do portal, com interfaces modernizadas, fluxos reorganizados e uma estrutura preparada para a evolução do produto. A implementação foi planejada de forma gradual, preservando o acesso às funcionalidades existentes durante a transição.',
        'A more consistent experience across the portal, with modernized interfaces, streamlined workflows, and a scalable structure to support future product development. The rollout was planned in phases, ensuring continued access to existing features throughout the transition.',
      ),
      role: 'Product Designer',
    },
    row: {
      title: t('PORTAL<br/>DE RH', 'MEDME<br/>HR PORTAL'),
      context: t(
        'O portal utilizado pelos RHs de empresas conveniadas reunia funcionalidades de gestão de colaboradores, limites, reembolsos e fechamentos. Com a evolução do produto, diferenças nos padrões de navegação, tabelas pouco legíveis e ações de difícil localização tornaram as atividades administrativas mais complexas. O desafio era modernizar a experiência sem comprometer a continuidade das operações.',
        'The portal used by HR teams at partner companies brought together employee management, benefit limits, reimbursements, and financial closing processes. As the product evolved, inconsistent navigation patterns, hard-to-read tables, and difficult-to-find actions made administrative tasks more complex. The challenge was to modernize the experience without disrupting ongoing operations.',
      ),
      myRole: t(
        'A partir da análise das interfaces existentes, demandas de suporte e referências de mercado, redesenhei oito áreas do portal com base no design system da MedMe. Reorganizei a navegação, os filtros e as ações, além de estruturar uma nova experiência para consulta e exportação de relatórios. As soluções foram alinhadas com Product Owner e desenvolvimento, considerando uma implementação gradual ao lado da versão anterior.',
        "Drawing on an analysis of the existing interfaces, support requests, and industry references, I redesigned eight areas of the portal using MedMe's design system. I restructured navigation, filters, and actions, and designed a new experience for accessing and exporting reports. I collaborated with the Product Owner and development team to align the solutions with a phased rollout alongside the existing version.",
      ),
      meta: t('Benefícios <span>·</span> Portal web B2B <span>·</span> ≈ 6 meses', 'Benefits <span>·</span> B2B web portal <span>·</span> ≈ 6 months'),
      body: t(
        'Redesenho do portal onde o RH das empresas conveniadas gerencia colaboradores, limites, reembolsos e fechamentos. <b>Um sistema em uso diário</b>, refeito sobre o design system da MedMe e liberado aos poucos, ao lado da versão antiga.',
        'Redesign of the administrative portal HR teams use to manage employees, limits, reimbursements and monthly closings. <b>A system in daily use</b>, rebuilt on the MedMe design system and released gradually alongside the old version.',
      ),
      beat: t(
        'Diagnóstico a partir de chamados do suporte, benchmark e da interface existente. Primeiro os padrões reutilizáveis, depois a reorganização de cada área, com a de relatórios reestruturada por completo. Escopo definido pelo Product Owner, soluções ajustadas com front e back-end.',
        'Diagnosis from support tickets, benchmark and the existing interface. Reusable patterns first, then each area reorganized — with the reports area fully restructured. Scope set by the Product Owner, solutions adjusted with front and back-end.',
      ),
      tags: [t('Sistema legado', 'Legacy system'), t('Design system'), t('Arquitetura da informação', 'Information architecture'), t('Lançamento gradual', 'Gradual rollout')],
      stat: { value: '8', caption: t('áreas redesenhadas', 'areas redesigned') },
      actors: [t('Product Owner'), t('Front-end'), t('Back-end')],
      status: t('case · em liberação gradual', 'case · in gradual release'),
    },
  },
  {
    slug: 'pdv',
    short: 'MedMe PDV',
    name: t('MEDME PDV', 'MEDME POS'),
    cover: capaPdv,
    coverAlt: 'Capa do case PDV do vendedor MedMe',
    home: {
      headline: t(
        'Uma experiência de venda pensada para a rotina dos atendentes.',
        'A point-of-sale experience designed around the daily workflows of sales associates.',
      ),
      meta: t('Benefícios · Web · Ferramenta de venda', 'Benefits · Web · Sales tool'),
      problem: t(
        'O registro de vendas acontecia por meio de funcionalidades adaptadas de um ambiente originalmente desenvolvido para beneficiários. A ausência de uma jornada específica para os vendedores dificultava a organização das operações e a aplicação das regras de negócio durante o atendimento.',
        'Sales were recorded through features adapted from a platform originally designed for beneficiaries. Without a dedicated workflow for sales associates, managing transactions and applying business rules during customer interactions became more complex.',
      ),
      solution: t(
        'Estruturei uma jornada de venda dedicada aos atendentes, organizando a identificação do cliente, a seleção dos produtos e a finalização da compra em etapas conectadas. A interface foi projetada para apresentar informações de convênio, saldo e condições de pagamento nos momentos relevantes, reduzindo a necessidade de alternar entre diferentes funcionalidades.',
        'I designed a dedicated sales journey, organizing customer identification, product selection, and checkout into connected steps. The interface was structured to display benefit plan details, available balances, and payment conditions at relevant decision points, reducing the need to switch between different features.',
      ),
      result: t(
        'Uma proposta de PDV com fluxos e interfaces específicos para a operação comercial, reunindo as informações necessárias ao atendimento em uma experiência estruturada. O projeto avançou para desenvolvimento, com a validação em ambiente real ainda pendente.',
        'A point-of-sale (POS) solution designed specifically for sales operations, bringing essential information and workflows into a unified experience. The project progressed to development, with real-world validation still pending.',
      ),
      role: 'Product Designer',
    },
    row: {
      title: t('MEDME<br/>PDV', 'MEDME<br/>POS'),
      context: t(
        'O registro de vendas acontecia por meio de funcionalidades adaptadas de um ambiente originalmente desenvolvido para beneficiários, sem uma jornada específica para os atendentes. O desafio era estruturar uma ferramenta dedicada à operação comercial, considerando suas etapas, regras de negócio e necessidades durante o atendimento.',
        'Sales were recorded through features adapted from a platform originally designed for beneficiaries, without a dedicated workflow for sales associates. The challenge was to design a point-of-sale experience tailored to sales operations, accounting for its different stages, business rules, and day-to-day customer service needs.',
      ),
      myRole: t(
        'A partir das regras de negócio apresentadas pelo Product Owner, projetei uma jornada de venda organizada em três etapas: identificação do cliente, seleção dos produtos e pagamento. Estruturei a navegação e as interfaces para apresentar informações de saldo e condições de compra nos momentos relevantes, orientando as decisões ao longo do atendimento.',
        'Based on the business rules provided by the Product Owner, I designed a three-stage sales journey: customer identification, product selection, and payment. I structured the navigation and interfaces to display available balances and purchase conditions at relevant decision points, guiding sales associates throughout the process.',
      ),
      meta: t('Benefícios <span>·</span> Ferramenta de venda <span>·</span> Em desenvolvimento', 'Benefits <span>·</span> Sales tool <span>·</span> In development'),
      body: t(
        'Um ponto de venda criado do zero para os vendedores da MedMe, que antes registravam vendas por <b>uma adaptação dentro do perfil de usuário comum</b>.',
        'A point of sale built from scratch for MedMe sellers, who used to register sales through <b>a workaround inside the regular user profile</b>.',
      ),
      beat: t(
        'Regras de negócio trazidas pelo Product Owner organizadas num fluxo em três etapas — cliente, produtos e pagamento — em que cada etapa libera a seguinte e as regras de saldo aparecem onde a decisão acontece.',
        'Business rules from the Product Owner organized into a three-step flow — customer, products, payment — where each step unlocks the next and balance rules show up where the decision happens.',
      ),
      tags: [t('Produto novo', 'New product'), t('Desenho de fluxo', 'Flow design'), t('Regras de negócio', 'Business rules'), t('Design system')],
      stat: { value: '03', caption: t('Etapas da jornada', 'Sales journey stages') },
      actors: [
        t('01 — Identificação do cliente', '01 — Customer identification'),
        t('02 — Seleção de produtos', '02 — Product selection'),
        t('03 — Pagamento', '03 — Payment'),
      ],
      status: t('case · em desenvolvimento', 'case · in development'),
    },
  },
  {
    slug: 'pulse',
    short: 'Pulse',
    name: t('PULSE EDUCAÇÃO', 'PULSE EDUCATION'),
    cover: capaPulse,
    coverAlt: 'Capa do case Pulse Educação',
    home: {
      headline: t(
        'Redesign de uma plataforma educacional com foco em gestão e acompanhamento escolar.',
        'Redesigning an education platform to improve school management and student monitoring.',
      ),
      meta: t('Edtech · Web · Rede pública', 'Ed-tech · Web · Public schools'),
      problem: t(
        'A plataforma reunia funcionalidades acadêmicas e administrativas em uma estrutura de navegação pouco consistente, com padrões de interface diferentes entre as áreas. Além disso, ainda não oferecia uma visualização integrada dos indicadores necessários para acompanhar o desempenho dos estudantes e identificar possíveis riscos de evasão escolar.',
        'The platform combined academic and administrative features within an inconsistent navigation structure, with different interface patterns across its sections. It also lacked a centralized view of key indicators to monitor student performance and identify potential risks of school dropout.',
      ),
      solution: t(
        'Reestruturei a navegação e redesenhei as interfaces existentes, considerando as necessidades de alunos, professores e gestores. Também projetei uma nova área de acompanhamento pedagógico, reunindo informações sobre desempenho em avaliações e indicadores de risco de evasão para apoiar a análise da trajetória dos estudantes.',
        'I restructured the navigation and redesigned the existing interfaces around the needs of students, teachers, and school administrators. I also designed a new student monitoring dashboard, bringing together academic performance and dropout risk indicators to support a clearer understanding of each student\'s progress.',
      ),
      result: t(
        'Uma proposta de experiência mais consistente entre as diferentes áreas da plataforma, com jornadas reorganizadas e uma nova interface dedicada à visualização de indicadores educacionais, ampliando as possibilidades de acompanhamento e gestão escolar.',
        'A more cohesive design proposal across the platform, with reorganized user journeys and a new interface for visualizing educational indicators, designed to support student monitoring and school management.',
      ),
      role: 'Product Designer',
    },
    row: {
      title: t('PULSE<br/>EDUCAÇÃO'),
      context: t(
        'Uma plataforma de ensino e gestão escolar que reunia funcionalidades acadêmicas e administrativas, mas apresentava inconsistências na navegação, na organização das informações e nos padrões de interface. O desafio era modernizar a experiência existente e incorporar uma nova funcionalidade de acompanhamento pedagógico, prevista para apoiar a identificação de estudantes em risco de evasão escolar.',
        'An education and school management platform that combined academic and administrative features but lacked consistency in navigation, information organization, and interface patterns. The challenge was to modernize the existing experience and incorporate a planned student monitoring feature designed to help identify students at risk of dropping out.',
      ),
      myRole: t(
        'Analisei a estrutura da plataforma e redesenhei suas principais interfaces, reorganizando a navegação de acordo com as necessidades de alunos, professores e gestores. Também projetei a nova área de acompanhamento pedagógico, estruturando a visualização de indicadores de desempenho, resultados de avaliações e riscos de evasão para facilitar a interpretação das informações pelas equipes escolares.',
        "I analyzed the platform's structure and redesigned its main interfaces, reorganizing navigation around the needs of students, teachers, and school administrators. I also designed the new student monitoring dashboard, structuring the visualization of academic performance indicators, assessment results, and dropout risk data to help school staff interpret information more effectively.",
      ),
      meta: t('Edtech <span>·</span> Rede pública <span>·</span> Redesign', 'Ed-tech <span>·</span> Public schools <span>·</span> Redesign'),
      body: t(
        'Uma plataforma de ensino e gestão escolar em que o pedido era visual e o problema estava <b>na organização do produto</b>.',
        'A learning and school management platform where the request was visual and the problem was <b>how the product was organized</b>.',
      ),
      beat: t(
        'Explorei e diagnostiquei as telas antigas, separei a navegação por perfil e propus o acompanhamento pedagógico para professores e gestores, documentado num mapa de navegação por perfil.',
        'I explored and diagnosed the old screens, separated navigation by role and proposed pedagogical follow-up for teachers and managers, documented in a navigation map by role.',
      ),
      tags: [t('Diagnóstico de produto', 'Product diagnosis'), t('Arquitetura da informação', 'Information architecture'), t('Redesign'), t('Visão de produto', 'Product vision')],
      stat: { value: '3', caption: t('perfis · uma plataforma', 'user roles · one platform') },
      actors: [t('Aluno', 'Student'), t('Professor', 'Teacher'), t('Gestor', 'School administrator')],
      status: t('case · redesign'),
    },
  },
];

export const designerActor = designMe;
export const caseHref = (slug: string) => url(`/cases/${slug}/`);
