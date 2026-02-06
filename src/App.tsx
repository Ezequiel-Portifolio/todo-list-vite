import { useState } from "react";
import TodoForm from "./components/TodoForm";

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

  const deleteTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const toggleTodo = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo,
      ),
    );
  };

  return (
    <div>
      <h1>Minha lista de tarefas</h1>

      <TodoForm onAdd={addTodo} />

      <p>Total de tarefas: {todos.length}</p>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <label style={{ cursor: "pointer"}}>
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => toggleTodo(todo.id)}
                />
                <span style={{ textDecoration: todo.completed ? "line-through" : "none", color: todo.completed ? "gray" : "black", marginLeft: "8px" }}>
                {todo.text}
                </span>
            </label>
            <button onClick={() => deleteTodo(todo.id)}>🗑️</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
