/**
 * Screens of the MedMe RH before/after explorer: old and new screenshot,
 * the stage ratio (the old shot's own ratio) and the four-row analysis.
 */
import type { CompareScreen } from './ScreenCompare.astro';

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
    nome: 'Relatórios',
    titulo: 'Fechamento e relatórios',
    antes: antesRelatorios,
    depois: novoRelatorios,
    aspect: '1881/892',
    problema:
      'Fechamentos aninhados por empresa e mês, cada mês com a sua tabela. Encontrar um período antigo exigia rolar todo o histórico.',
    decisao:
      'Trocar a navegação por uma consulta: o RH escolhe empresa, ano e mês, e a tela mostra só o que importa.',
    solucao:
      'Filtros, meses em abas com status, resumo do mês, relatórios agrupados por empresa e documentos abertos na própria linha.',
    beneficio: 'Localizar um fechamento e saber se está pago, pendente ou vencido sem percorrer o histórico.',
  },
  {
    id: 'dashboard',
    nome: 'Dashboard',
    titulo: 'Dashboard',
    antes: antesDashboard,
    depois: novoDashboard,
    aspect: '1897/924',
    problema: 'Gráfico central, indicadores dispersos e uma imagem de campanha que não carregava.',
    decisao: 'Organizar a primeira tela em blocos de leitura sobre a situação do convênio.',
    solucao:
      'Campanhas em destaque, quatro indicadores, análise financeira filtrável e exportável, usuários por situação de cadastro e últimos fechamentos.',
    beneficio: 'Uma visão geral do convênio logo ao entrar, com os cadastros que pedem atenção à vista.',
  },
  {
    id: 'usuarios',
    nome: 'Usuários',
    titulo: 'Usuários',
    antes: antesUsuarios,
    depois: novoUsuarios,
    aspect: '1886/908',
    problema: 'Todas as colunas com o mesmo peso e busca e filtro de empresa em extremos opostos da tela.',
    decisao: 'Aplicar o padrão de listagem do portal, com o nome como dado principal.',
    solucao: 'Nome em destaque e filtro de empresa, menu de ações e busca numa mesma barra acima da tabela.',
    beneficio: 'Encontrar um colaborador com menos esforço de leitura e saber onde estão as operações da lista.',
  },
  {
    id: 'perfil-usuario',
    nome: 'Perfil do usuário',
    titulo: 'Perfil do usuário',
    antes: antesPerfil,
    depois: novoPerfil,
    aspect: '1872/917',
    problema: 'Poucos dados por bloco, muito espaço vazio e quase nenhuma ação disponível na tela.',
    decisao: 'Fazer do perfil o lugar onde se resolve tudo sobre um colaborador.',
    solucao:
      'Blocos de dados pessoais, contato, dependentes, endereços e empresa, ações de transferir CNPJ, bloquear saldo, desvincular e resetar senha, e regras de compra por categoria.',
    beneficio: 'Consultar e agir sobre um colaborador sem sair da tela dele.',
  },
  {
    id: 'controle-rh',
    nome: 'Controle perfis RH',
    titulo: 'Controle de perfis RH',
    antes: antesControleRh,
    depois: novoControleRh,
    aspect: '1905/755',
    problema: 'Lista simples, com a busca solta no meio do cabeçalho e o botão de adicionar sem destaque.',
    decisao: 'Aplicar o mesmo padrão de listagem das outras áreas.',
    solucao:
      'Título com descrição da área, busca por nome ou CPF ao lado do filtro de empresas e Adicionar RH como ação principal.',
    beneficio: 'Uma tela que o RH já reconhece das outras áreas do portal.',
  },
  {
    id: 'pre-cadastrados',
    nome: 'Pré-cadastrados',
    titulo: 'Pré-cadastrados',
    antes: antesPreCadastrados,
    depois: novoPreCadastrados,
    aspect: '1892/927',
    problema: 'Destaque verde em todas as linhas e botões soltos, distantes da busca.',
    decisao: 'Reunir as operações da lista num só lugar e dar ao CPF o papel de dado principal.',
    solucao: 'Adicionar, exportar, importar e relatório de importação numa barra junto da busca, com o CPF em destaque.',
    beneficio: 'As operações de pré-cadastro ficam fáceis de encontrar e a tabela, mais fácil de ler.',
  },
  {
    id: 'reembolsos',
    nome: 'Reembolsos',
    titulo: 'Reembolsos',
    antes: antesReembolsos,
    depois: novoReembolsos,
    aspect: '1883/911',
    problema: 'Tabela extensa e filtros distantes da busca, em lados opostos da tela.',
    decisao: 'Juntar todos os controles da lista numa única barra.',
    solucao: 'Filtros de status e empresa, extração de relatório e busca na mesma linha, e status com rótulo e ícone.',
    beneficio: 'Filtrar e extrair relatórios sem procurar os controles pela tela.',
  },
  {
    id: 'plano',
    nome: 'Plano MedMe',
    titulo: 'Plano MedMe',
    antes: antesPlano,
    depois: novoPlano,
    aspect: '1893/924',
    problema: 'Dados financeiros empilhados numa coluna lateral e período fixo, com pouca hierarquia.',
    decisao: 'Separar os indicadores do convênio da lista de colaboradores.',
    solucao:
      'Três indicadores no topo (gastos totais, valor de economia e total do período), filtros de empresa e período junto da busca e saldo ativo como status.',
    beneficio: 'Acompanhar o convênio e consultar os colaboradores na mesma tela, com leitura mais clara.',
  },
];
