import {render, screen} from "@testing-library/react";
import {composeStories} from '@storybook/testing-react';
import * as stories from './App.stories';

const {AddTwoTodosAndCheckOneScenario} = composeStories(stories);

describe('play AddTwoTodosAndCheckOneScenario', () => {
    it("renders two todos", async () => {
        // Arrange
        const {container} = render(<AddTwoTodosAndCheckOneScenario/>);

        // Act
        await AddTwoTodosAndCheckOneScenario.play({canvasElement: container});

        // Assert
        const todos = screen.getAllByTestId("todo-title");
        expect(todos).toHaveLength(2);
    })
    it("checks one todo", async () => {
        // Arrange
        const {container} = render(<AddTwoTodosAndCheckOneScenario/>);

        // Act
        await AddTwoTodosAndCheckOneScenario.play({canvasElement: container});

        // Assert
        const todoCheckboxes = screen.getAllByRole("checkbox", {checked: true});
        expect(todoCheckboxes).toHaveLength(1);
    })
});
