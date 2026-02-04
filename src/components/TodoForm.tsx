import React, { useState } from "react";

type TodoFormProps = {
    onAdd: (text: string) => void;
}

function TodoForm({ onAdd}: TodoFormProps) {
    const [text, setText] = useState("");

    const handleSubmit = (e: React.SyntheticEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (text.trim() === "") return;

        onAdd(text);
        setText("");

    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Digite uma tarefa..."
            />
            <button type="submit">Adicionar</button>
        </form>
    );

}

export default TodoForm;