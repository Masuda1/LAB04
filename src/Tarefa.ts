/**
 * Classe que representa uma tarefa no sistema de gestão de tarefas.
 */
export class Tarefa {
  id: number; // Identificador único da tarefa.
  descricao: string; // Descrição da tarefa.
  status: string; // Status atual da tarefa (e.g., "Pendente", "Em Andamento", "Concluída").
  projeto: string; // Nome do projeto ao qual a tarefa pertence.

  /**
   * Construtor da classe Tarefa.
   * @param id - O identificador único da tarefa.
   * @param descricao - A descrição da tarefa.
   * @param status - O status da tarefa.
   * @param projeto - O nome do projeto ao qual a tarefa pertence.
   */
  constructor(id: number, descricao: string, status: string, projeto: string) {
    this.id = id;
    this.descricao = descricao;
    this.status = status;
    this.projeto = projeto;
  }
}
