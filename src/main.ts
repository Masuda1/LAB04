import { Tarefa } from './Tarefa';
import { GestorTarefas } from './GestorTarefas';

// Função para testar o sistema de gestão de tarefas
function testarGestorTarefas(): void {
  const gestor = new GestorTarefas();

  // Criar e adicionar tarefas
  const tarefa1 = new Tarefa(1, 'Desenvolver página de login', 'Pendente', 'Projeto A');
  const tarefa2 = new Tarefa(2, 'Implementar API de usuários', 'Em Andamento', 'Projeto A');
  const tarefa3 = new Tarefa(3, 'Testar integração com banco de dados', 'Pendente', 'Projeto B');

  gestor.adicionarTarefa(tarefa1);
  gestor.adicionarTarefa(tarefa2);
  gestor.adicionarTarefa(tarefa3);

  // Atualizar o status de uma tarefa
  gestor.atualizarStatus(1, 'Concluída');

  // Consultar tarefas de um projeto específico
  const tarefasProjetoA = gestor.consultarTarefasPorProjeto('Projeto A');
  console.log(`Tarefas do Projeto A:`);
  tarefasProjetoA.forEach(t => {
    console.log(`- ID: ${t.id}, Descrição: ${t.descricao}, Status: ${t.status}`);
  });

  // Tentar atualizar o status de uma tarefa inexistente
  gestor.atualizarStatus(4, 'Concluída');

  // Consultar tarefas de um projeto inexistente
  gestor.consultarTarefasPorProjeto('Projeto C');
}

testarGestorTarefas();
