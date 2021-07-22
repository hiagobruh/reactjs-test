# Teste técnico Startec Jobs - front-end ReactJS utilizando a Marvel API

Projeto desenvolvido como parte do processo seletivo da Startec Jobs para avaliação de conhecimentos técnicos e habilidades.

## Considerações iniciais

Devido à restrições de tempo causadas pelo trabalho durante o dia, além de atividades diárias/reuniões à noite, o tempo para o desenvolvimento do desafio ficou bem limitado, algo por volta de 4 a 6 horas no total eu diria. O código utilizado no projeto foi inteiramente desenvolvido do zero, apenas com certa reutilização do design adaptado de outro projeto pessoal.

Pelos motivos expostos as funcionalidades opcionais não foram desenvolvidas, e as funcionalidades requeridas não
foram desenvolvidas da maneira desejada utilizando os melhores padrões. Dos requisitos o menos explorado foram os testes
automatizados, que infelizmente foram limitados a funcionalidades básicas dos poucos componentes devido ao tempo necessário.

Abaixo estão listados modificações pertinentes ao projeto para se atingir um bom nível.

#### Problemas mais urgentes:

- Cobertura de testes de todos os arquivos
- Desenvolver testes automatizados em conjunto com as funcionalidades
- Organização dos commits dividindo em features
- Handling de erros
- Utilização do isLoading para exibir carregamento em tela

#### Melhorias de uso da aplicação:

- Internacionalização
  - Tradução das informações da API
- Listas carregar mais itens ao chegar no fim

#### Limpeza de código:

- Reutilização de estilização das telas
- Componentes mais básicos (como por exemplo botões)
- Melhor aplicação do conceito hexagonal

#### Funcionalidades complementares:

- Deploy via github para AWS
- Telas de detalhes dos itens das listas
- Filtros na lista
- Utilização de bundlers (como por exemplo webpack)

## Configuração do projeto

Copiar o arquivo `/src/config.example.json` e renomear a cópia para `/src/config.json`, passando as chaves necessárias dentro do arquivo de configuração.

### `yarn`

Instalação das bibliotecas da aplicação.

### `yarn start`

Roda em modo de desenvolvimento.\
Abra [http://localhost:3000](http://localhost:3000) para visualizar no navegador.

### `yarn test`

Roda os testes em modo interativo.

### `yarn build`

Contrói o aplicativo em modo de produção para a pasta `build`

## Estrutura de pastas

```
+-- .vscode
| +-- Configurações do vscode para melhor utilização
+-- public
| +-- Arquivos públicos da aplicação
+-- src
| +-- __tests__
|   +-- Testes automatizados
| +-- components
|   +-- Componentes reutilizáveis na aplicação como um todo
| +-- hooks
|   +-- Hooks personalizados
| +-- navigation
|   +-- Arquivos relacionados à rotas e navegação
| +-- pages
|   +-- screenName
|     +-- Telas separadas em pastas utilizando o padrão Container-View
| +-- services
|   +-- Arquivos relacionados ao tratamento de serviços externos
| +-- utils
|   +-- Arquivos com funções utilitárias
| +-- config.json
| +-- index.tsx
```
