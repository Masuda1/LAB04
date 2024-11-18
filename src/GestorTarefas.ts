import { Tarefa } from './Tarefa';

/**
 * Classe que gerencia as tarefas da equipe de desenvolvimento.
 */
export class GestorTarefas {
  // Lista privada que armazena todas as tarefas da equipe.
  private tarefas: Tarefa[] = [];

  /**
   * Adiciona uma nova tarefa ao sistema.
   * @param tarefa - Instância da classe Tarefa a ser adicionada.
   */
  adicionarTarefa(tarefa: Tarefa): void {
    this.tarefas.push(tarefa);
    console.log(`Tarefa "${tarefa.descricao}" adicionada com sucesso.`);
  }

  /**
   * Atualiza o status de uma tarefa existente.
   * @param id - O ID da tarefa cujo status será atualizado.
   * @param status - O novo status da tarefa.
   */
  atualizarStatus(id: number, status: string): void {
    const tarefa = this.tarefas.find(t => t.id === id);
    if (!tarefa) {
      console.error(`Tarefa com ID ${id} não encontrada.`);
      return;
    }
    tarefa.status = status;
    console.log(`Status da tarefa "${tarefa.descricao}" atualizado para "${status}".`);
  }

  /**
   * Consulta todas as tarefas de um projeto específico.
   * @param projeto - O nome do projeto a ser consultado.
   * @returns Um array de tarefas pertencentes ao projeto.
   */
  consultarTarefasPorProjeto(projeto: string): Tarefa[] {
    const tarefasProjeto = this.tarefas.filter(t => t.projeto === projeto);
    if (tarefasProjeto.length === 0) {
      console.warn(`Nenhuma tarefa encontrada para o projeto "${projeto}".`);
    }
    return tarefasProjeto;
  }
}
