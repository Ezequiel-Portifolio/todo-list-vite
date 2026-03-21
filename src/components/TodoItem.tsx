import { Todo } from "../types";

type TodoItemProps = {
  todo: Todo;
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
};

function TodoItem({ todo, onToggle, onDelete }: TodoItemProps) {
  return (
    <li
      style={{
        display: "flex",
        alignItems: "center",
        gap: "10px",
        marginBottom: "8px",
      }}
    >
      <label
        style={{ cursor: "pointer", display: "flex", alignItems: "center" }}
      >
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => onToggle(todo.id)}
        />
        <span
          style={{
            textDecoration: todo.completed ? "line-through" : "none",
            color: todo.completed ? "gray" : "black",
            marginLeft: "8px",
          }}
        >
          {todo.text}
        </span>
      </label>
      <button
        onClick={() => onDelete(todo.id)}
        style={{ background: "transparent", border: "none", cursor: "pointer" }}
      >
        🗑️
      </button>
    </li>
  );
}

export default TodoItem;
