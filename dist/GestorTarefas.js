"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GestorTarefas = void 0;
class GestorTarefas {
    constructor() {
        this.tarefas = [];
    }
    adicionarTarefa(tarefa) {
        this.tarefas.push(tarefa);
        console.log(`Tarefa "${tarefa.descricao}" adicionada com sucesso.`);
    }
    atualizarStatus(id, status) {
        const tarefa = this.tarefas.find(t => t.id === id);
        if (!tarefa) {
            console.error(`Tarefa com ID ${id} não encontrada.`);
            return;
        }
        tarefa.status = status;
        console.log(`Status da tarefa "${tarefa.descricao}" atualizado para "${status}".`);
    }
    consultarTarefasPorProjeto(projeto) {
        const tarefasProjeto = this.tarefas.filter(t => t.projeto === projeto);
        if (tarefasProjeto.length === 0) {
            console.warn(`Nenhuma tarefa encontrada para o projeto "${projeto}".`);
        }
        return tarefasProjeto;
    }
}
exports.GestorTarefas = GestorTarefas;
//# sourceMappingURL=GestorTarefas.js.map