"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Tarefa_1 = require("./Tarefa");
const GestorTarefas_1 = require("./GestorTarefas");
function testarGestorTarefas() {
    const gestor = new GestorTarefas_1.GestorTarefas();
    const tarefa1 = new Tarefa_1.Tarefa(1, 'Desenvolver página de login', 'Pendente', 'Projeto A');
    const tarefa2 = new Tarefa_1.Tarefa(2, 'Implementar API de usuários', 'Em Andamento', 'Projeto A');
    const tarefa3 = new Tarefa_1.Tarefa(3, 'Testar integração com banco de dados', 'Pendente', 'Projeto B');
    gestor.adicionarTarefa(tarefa1);
    gestor.adicionarTarefa(tarefa2);
    gestor.adicionarTarefa(tarefa3);
    gestor.atualizarStatus(1, 'Concluída');
    const tarefasProjetoA = gestor.consultarTarefasPorProjeto('Projeto A');
    console.log(`Tarefas do Projeto A:`);
    tarefasProjetoA.forEach(t => {
        console.log(`- ID: ${t.id}, Descrição: ${t.descricao}, Status: ${t.status}`);
    });
    gestor.atualizarStatus(4, 'Concluída');
    gestor.consultarTarefasPorProjeto('Projeto C');
}
testarGestorTarefas();
//# sourceMappingURL=main.js.map