# Regras do projeto

## Tamanhos e espaçamentos
- Nunca usar números ímpares em tamanhos, espaçamentos, raios ou fontes. Sempre valores pares (8, 12, 14, 16, 20, 24, 32, 40, 48...).
- Exceção: bordas hairline de 1px, que são o padrão do design system.

## Design system
- Usar sempre o MedMe Design System: componentes do bundle e tokens `--semantic-color-*` / `--core-*`.
- Botões primários: fundo brand-400 (ciano) com texto branco, pill (raio 104), altura 48.
- Campos de busca: pill (raio 104), fundo claro, borda cinza discreta e botão circular de lupa em brand-subtle à direita.
- Status: componente `Badge` com `type="pill outline"` e `icon="icon leading"`.

## Padrão de tela (espelhar o PDV Vendedor)
- Topbar 68px com sombra `0 8px 12px -3px rgba(5,0,155,0.15)`, logo + saudação à esquerda, pill de campanha ao centro, localidade/notificações/apps/avatar à direita.
- Sidebar 248px, item ativo com fundo brand-subtle e texto brand-bold, raio 8.
- Conteúdo com padding `32px 40px 48px`; título 28/700 e subtítulo 14 em carbon-500.
- Tabelas dentro de card branco (borda carbon-200, raio 16) com toolbar interna; cabeçalho em carbon-50, linhas separadas por carbon-100 sem bordas verticais.
- Ações de linha em botões quadrados 32px, raio 8.
- Modais centralizados sobre `rgba(16,24,40,0.55)`.
