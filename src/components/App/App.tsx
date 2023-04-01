import React, { useState } from "react";
import type { Todo } from "../../types";
import { TodoContext } from "../context";
import { TodoInput } from "../TodoInput";
import { TodoList } from "../TodoList";

export const App = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodo = (todo: Todo) => {
    const newTodos = todos.concat(todo);
    setTodos(newTodos);
  };

  const deleteTodo = (id: string) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };

  const toggle = (id: string) => {
    const newTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(newTodos);
  };

  return (
    <TodoContext.Provider value={{ toggle, deleteTodo, addTodo }}>
      <section className="todoapp">
        <header className="header">
          <h1>todos</h1>
          <TodoInput />
        </header>
        <div className="main">
          <TodoList todos={todos} />
        </div>
      </section>
    </TodoContext.Provider>
  );
};
