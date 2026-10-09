/**
 * Screens of the MedMe RH before/after explorer: old and new screenshot,
 * the stage ratio (the old shot's own ratio) and the four-row analysis.
 */
import type { CompareScreen } from './ScreenCompare.astro';
import { t } from '@/data/i18n';

import antesRelatorios from '@/assets/medme/antes-relatorios.png';
import novoRelatorios from '@/assets/medme/novo-relatorios.png';
import antesDashboard from '@/assets/medme/antes-dashboard.png';
import novoDashboard from '@/assets/medme/novo-dashboard.jpg';
import antesUsuarios from '@/assets/medme/antes-usuarios.png';
import novoUsuarios from '@/assets/medme/novo-usuarios.jpg';
import antesPerfil from '@/assets/medme/antes-perfil-usuario.png';
import novoPerfil from '@/assets/medme/novo-perfil-usuario.jpg';
import antesControleRh from '@/assets/medme/antes-controle-rh.png';
import novoControleRh from '@/assets/medme/novo-controle-rh.jpg';
import antesPreCadastrados from '@/assets/medme/antes-pre-cadastrados.png';
import novoPreCadastrados from '@/assets/medme/novo-pre-cadastrados.png';
import antesReembolsos from '@/assets/medme/antes-reembolsos.png';
import novoReembolsos from '@/assets/medme/novo-reembolsos.png';
import antesPlano from '@/assets/medme/antes-plano.png';
import novoPlano from '@/assets/medme/novo-plano.jpg';

export const telas: CompareScreen[] = [
  {
    id: 'relatorios',
    nome: t('Relatórios', "Reports"),
    titulo: t('Fechamento e relatórios', "Closing and reports"),
    antes: antesRelatorios,
    depois: novoRelatorios,
    aspect: '1881/892',
    problema:
      t('Fechamentos aninhados por empresa e mês, cada mês com a sua tabela. Encontrar um período antigo exigia rolar todo o histórico.', "Closings nested by company and month, each month with its own table. Finding an old period meant scrolling through the whole history."),
    decisao:
      t('Trocar a navegação por uma consulta: o RH escolhe empresa, ano e mês, e a tela mostra só o que importa.', "Replace navigation with a query: HR picks the company, year and month, and the screen shows only what matters."),
    solucao:
      t('Filtros, meses em abas com status, resumo do mês, relatórios agrupados por empresa e documentos abertos na própria linha.', "Filters, months as tabs with status, a monthly summary, reports grouped by company and documents opened right in the row."),
    beneficio: t('Localizar um fechamento e saber se está pago, pendente ou vencido sem percorrer o histórico.', "Find a closing and know whether it is paid, pending or overdue without going through the history."),
  },
  {
    id: 'dashboard',
    nome: 'Dashboard',
    titulo: 'Dashboard',
    antes: antesDashboard,
    depois: novoDashboard,
    aspect: '1897/924',
    problema: t('Gráfico central, indicadores dispersos e uma imagem de campanha que não carregava.', "A central chart, scattered indicators and a campaign image that did not load."),
    decisao: t('Organizar a primeira tela em blocos de leitura sobre a situação do convênio.', "Organize the first screen into reading blocks about the status of the benefit plan."),
    solucao:
      t('Campanhas em destaque, quatro indicadores, análise financeira filtrável e exportável, usuários por situação de cadastro e últimos fechamentos.', "Featured campaigns, four indicators, a filterable and exportable financial analysis, users by registration status and the latest closings."),
    beneficio: t('Uma visão geral do convênio logo ao entrar, com os cadastros que pedem atenção à vista.', "An overview of the plan right on entry, with the registrations that need attention in view."),
  },
  {
    id: 'usuarios',
    nome: t('Usuários', "Users"),
    titulo: t('Usuários', "Users"),
    antes: antesUsuarios,
    depois: novoUsuarios,
    aspect: '1886/908',
    problema: t('Todas as colunas com o mesmo peso e busca e filtro de empresa em extremos opostos da tela.', "Every column with the same weight, and search and company filter at opposite ends of the screen."),
    decisao: t('Aplicar o padrão de listagem do portal, com o nome como dado principal.', "Apply the portal’s list pattern, with the name as the primary data."),
    solucao: t('Nome em destaque e filtro de empresa, menu de ações e busca numa mesma barra acima da tabela.', "Name highlighted, and company filter, actions menu and search in a single bar above the table."),
    beneficio: t('Encontrar um colaborador com menos esforço de leitura e saber onde estão as operações da lista.', "Find an employee with less reading effort and know where the list operations are."),
  },
  {
    id: 'perfil-usuario',
    nome: t('Perfil do usuário', "User profile"),
    titulo: t('Perfil do usuário', "User profile"),
    antes: antesPerfil,
    depois: novoPerfil,
    aspect: '1872/917',
    problema: t('Poucos dados por bloco, muito espaço vazio e quase nenhuma ação disponível na tela.', "Little data per block, a lot of empty space and almost no actions available on the screen."),
    decisao: t('Fazer do perfil o lugar onde se resolve tudo sobre um colaborador.', "Make the profile the place where everything about an employee gets done."),
    solucao:
      t('Blocos de dados pessoais, contato, dependentes, endereços e empresa, ações de transferir CNPJ, bloquear saldo, desvincular e resetar senha, e regras de compra por categoria.', "Blocks for personal data, contact, dependents, addresses and company; actions to transfer company ID (CNPJ), block balance, unlink and reset password; and purchase rules by category."),
    beneficio: t('Consultar e agir sobre um colaborador sem sair da tela dele.', "Look up and act on an employee without leaving their screen."),
  },
  {
    id: 'controle-rh',
    nome: t('Controle perfis RH', "HR profile management"),
    titulo: t('Controle de perfis RH', "HR profile management"),
    antes: antesControleRh,
    depois: novoControleRh,
    aspect: '1905/755',
    problema: t('Lista simples, com a busca solta no meio do cabeçalho e o botão de adicionar sem destaque.', "A plain list, with the search floating in the middle of the header and an add button with no emphasis."),
    decisao: t('Aplicar o mesmo padrão de listagem das outras áreas.', "Apply the same list pattern as the other areas."),
    solucao:
      t('Título com descrição da área, busca por nome ou CPF ao lado do filtro de empresas e Adicionar RH como ação principal.', "A title with an area description, search by name or CPF next to the company filter, and Add HR as the primary action."),
    beneficio: t('Uma tela que o RH já reconhece das outras áreas do portal.', "A screen HR already recognizes from the portal’s other areas."),
  },
  {
    id: 'pre-cadastrados',
    nome: t('Pré-cadastrados', "Pre-registered"),
    titulo: t('Pré-cadastrados', "Pre-registered"),
    antes: antesPreCadastrados,
    depois: novoPreCadastrados,
    aspect: '1892/927',
    problema: t('Destaque verde em todas as linhas e botões soltos, distantes da busca.', "Green highlight on every row and loose buttons, far from the search."),
    decisao: t('Reunir as operações da lista num só lugar e dar ao CPF o papel de dado principal.', "Bring the list operations into one place and make CPF the primary data."),
    solucao: t('Adicionar, exportar, importar e relatório de importação numa barra junto da busca, com o CPF em destaque.', "Add, export, import and import report in one bar next to the search, with CPF highlighted."),
    beneficio: t('As operações de pré-cadastro ficam fáceis de encontrar e a tabela, mais fácil de ler.', "Pre-registration operations are easy to find, and the table is easier to read."),
  },
  {
    id: 'reembolsos',
    nome: t('Reembolsos', "Reimbursements"),
    titulo: t('Reembolsos', "Reimbursements"),
    antes: antesReembolsos,
    depois: novoReembolsos,
    aspect: '1883/911',
    problema: t('Tabela extensa e filtros distantes da busca, em lados opostos da tela.', "A long table and filters far from the search, on opposite sides of the screen."),
    decisao: t('Juntar todos os controles da lista numa única barra.', "Bring all list controls together in a single bar."),
    solucao: t('Filtros de status e empresa, extração de relatório e busca na mesma linha, e status com rótulo e ícone.', "Status and company filters, report export and search on the same line, and status shown with a label and icon."),
    beneficio: t('Filtrar e extrair relatórios sem procurar os controles pela tela.', "Filter and export reports without hunting for the controls on the screen."),
  },
  {
    id: 'plano',
    nome: t('Plano MedMe', "MedMe plan"),
    titulo: t('Plano MedMe', "MedMe plan"),
    antes: antesPlano,
    depois: novoPlano,
    aspect: '1893/924',
    problema: t('Dados financeiros empilhados numa coluna lateral e período fixo, com pouca hierarquia.', "Financial data stacked in a side column and a fixed period, with little hierarchy."),
    decisao: t('Separar os indicadores do convênio da lista de colaboradores.', "Separate the plan indicators from the employee list."),
    solucao:
      t('Três indicadores no topo (gastos totais, valor de economia e total do período), filtros de empresa e período junto da busca e saldo ativo como status.', "Three indicators at the top (total spend, savings and period total), company and period filters next to the search, and active balance as a status."),
    beneficio: t('Acompanhar o convênio e consultar os colaboradores na mesma tela, com leitura mais clara.', "Track the plan and look up employees on the same screen, with clearer reading."),
  },
];
