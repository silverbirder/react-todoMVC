import React, { useContext } from "react";
import type { Todo } from "../../types";
import { TodoContext } from "../context";

type Props = {
  todo: Todo;
};

export const TodoItem: React.FC<Props> = ({ todo }) => {
  const { toggle, deleteTodo } = useContext(TodoContext);
  return (
    <li className={todo.completed ? "completed" : ""}>
      <div className="view">
        <input
          className="toggle"
          type="checkbox"
          checked={todo.completed}
          onChange={() => toggle(todo.id)}
        />
        <label data-testid="todo-title">{todo.title}</label>
        <button className="destroy" onClick={() => deleteTodo(todo.id)} />
      </div>
    </li>
  );
};
