import React from "react";
import {render, screen} from "@testing-library/react";
import {TodoItem} from "./TodoItem";
import {TodoContext} from "../context";
import userEvent from "@testing-library/user-event";

const mockToggle = jest.fn();
const mockDeleteTodo = jest.fn();
const mockAdd = jest.fn();

const mockTodo = {
    id: "1",
    title: "Test Todo",
    completed: false,
};

describe("TodoItem", () => {
    it("renders todo title", () => {
        // Act
        render(
            <TodoContext.Provider value={{toggle: mockToggle, deleteTodo: mockDeleteTodo, addTodo: mockAdd}}>
                <TodoItem todo={mockTodo}/>
            </TodoContext.Provider>
        );

        // Assert
        expect(screen.getByText(mockTodo.title)).toBeInTheDocument();
    });

    it("toggles todo completion", () => {
        // Arrange
        render(
            <TodoContext.Provider value={{toggle: mockToggle, deleteTodo: mockDeleteTodo, addTodo: mockAdd}}>
                <TodoItem todo={mockTodo}/>
            </TodoContext.Provider>
        );

        // Act
        userEvent.click(screen.getByRole("checkbox"));

        // Assert
        expect(mockToggle).toHaveBeenCalledWith(mockTodo.id);
    });

    it("deletes a todo", async () => {
        // Arrange
        render(
            <TodoContext.Provider value={{toggle: mockToggle, deleteTodo: mockDeleteTodo, addTodo: mockAdd}}>
                <TodoItem todo={mockTodo}/>
            </TodoContext.Provider>
        );

        // Act
        userEvent.click(screen.getByRole("button"));

        // Assert
        expect(mockDeleteTodo).toHaveBeenCalledWith(mockTodo.id);
    });
});
