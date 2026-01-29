import { useState } from "react";

type Todo = {
  id: number;
  text: string;
  completed: boolean;
};

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodo = (text: string) => {
    const newTodo: Todo = {
      id: Date.now(),
      text: text,
      completed: false,
    };
    setTodos([...todos, newTodo]);
  };

  return (
    <div>
      <h1>Minha lista de tarefas</h1>
      <button onClick={() => addTodo("Nova tarefa")}>
        Adicionar Tarefa Teste
      </button>
      <p>Total de tarefas: {todos.length}</p>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.text}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
