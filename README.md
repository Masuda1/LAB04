# Sistema de Gestão de Tarefas

## Descrição

Este projeto é uma aplicação em TypeScript que permite gerenciar tarefas de uma equipe de desenvolvimento. O sistema inclui funcionalidades para:

- Adicionar tarefas
- Atualizar o status das tarefas
- Consultar tarefas por projeto

## Funcionalidades

- **Adição de Tarefas**: Permite criar novas tarefas, especificando detalhes como título, descrição, projeto associado e status inicial.
- **Atualização de Status**: Permite atualizar o status de uma tarefa específica, refletindo o progresso do trabalho.
- **Consulta de Tarefas por Projeto**: Permite listar todas as tarefas associadas a um projeto específico.

## Estrutura do Projeto

- **Tarefa.ts**: Classe que representa uma tarefa, definindo suas propriedades e inicializando-as através de um construtor.
  
- **GestorTarefas.ts**: Classe que gerencia o cadastro e as operações com tarefas. Possui métodos para adicionar tarefas, atualizar o status e consultar tarefas por projeto. Inclui verificações para tratar erros de tarefas inexistentes.

- **main.ts**: Script que contém a função de teste para simular o uso do sistema. A função `testarGestorTarefas` cria instâncias de tarefas, adiciona-as ao sistema, atualiza o status de tarefas e consulta tarefas de um projeto para demonstrar as funcionalidades do sistema.

## Explicação do Código

### Classe `Tarefa`

Define as propriedades de uma tarefa:

- `id`: Identificador único da tarefa.
- `titulo`: Título da tarefa.
- `descricao`: Descrição detalhada da tarefa.
- `projeto`: Nome do projeto ao qual a tarefa está associada.
- `status`: Status atual da tarefa (por exemplo, "Pendente", "Em Progresso", "Concluída").

O construtor inicializa todas as propriedades da tarefa.

### Classe `GestorTarefas`

Possui uma lista privada de tarefas e métodos para:

- **Adicionar Tarefas**: Adiciona novas tarefas ao sistema, garantindo que cada tarefa tenha um identificador único.
- **Atualizar Status**: Atualiza o status de uma tarefa específica, identificada pelo seu `id`.
- **Consultar Tarefas por Projeto**: Retorna uma lista de tarefas associadas a um projeto específico.

Inclui tratamento de erros para:

- **Tarefas Inexistentes**: Informa quando uma tarefa não é encontrada ao tentar atualizar seu status ou consultá-la.

### Funções de Teste

A função `testarGestorTarefas` em `main.ts` simula o fluxo de uso do sistema:

- Cria instâncias de tarefas.
- Adiciona as tarefas ao sistema de gerenciamento.
- Atualiza o status de uma tarefa específica.
- Consulta as tarefas de um projeto específico.
- Demonstra o tratamento de erros ao tentar atualizar ou consultar tarefas inexistentes.

## Como Executar

1. **Pré-requisitos**: Certifique-se de ter o Node.js e o TypeScript instalados em sua máquina.

   Instale o TypeScript globalmente, se necessário:

   ```bash
   npm install -g typescript
   ```

2. **Compilar os Arquivos TypeScript**:

   Estando como o cmd aberto dentro da pasta *src* compile os arquivos TypeScript usando o comando:

   ```bash
   tsc
   ```

   Isso irá gerar os arquivos JavaScript correspondentes.

3. **Executar o Script Principal**:

   Estando com o cmd aberto dentro da pasta *dist* execute o arquivo compilado `main.js`:

   ```bash
   node main.js
   ```

## Testes Realizados

- **Adição de Tarefas**: Adição de três tarefas ao sistema para formar o cadastro inicial.
- **Atualização de Status de uma Tarefa Específica**: Atualização do status de uma tarefa existente no sistema.
- **Consulta de Tarefas por Projeto**: Busca de todas as tarefas associadas a um projeto específico.
- **Tratamento de Erros**: Verificações para garantir que não ocorram operações inválidas, como tentar atualizar ou consultar uma tarefa inexistente, exibindo mensagens de erro apropriadas.

## Tratamento de Erros

O sistema inclui verificações para:

- **Tarefas Inexistentes**: Ao tentar atualizar o status ou consultar uma tarefa que não está cadastrada, o sistema informa que a tarefa não foi encontrada.