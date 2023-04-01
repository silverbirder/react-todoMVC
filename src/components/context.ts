import React from "react";
import { Todo } from "../types";

type TodoContextType = {
  toggle: (id: string) => void;
  deleteTodo: (id: string) => void;
  addTodo: (todo: Todo) => void;
};

export const TodoContext = React.createContext<TodoContextType>({
  toggle: function (id: string): void {
    throw new Error("Function not implemented.");
  },
  deleteTodo: function (id: string): void {
    throw new Error("Function not implemented.");
  },
  addTodo: function (todo: Todo): void {
    throw new Error("Function not implemented.");
  },
});
