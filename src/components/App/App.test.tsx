import {render, screen} from "@testing-library/react";
import {composeStories} from '@storybook/testing-react';
import * as stories from './App.stories';

const {AddTodoScenario} = composeStories(stories);

describe('play AddTodoScenario', () => {
    it("renders add todo", async () => {
        // Arrange
        const {container} = render(<AddTodoScenario/>);

        // Act
        await AddTodoScenario.play({canvasElement: container});

        // Assert
        const addTodoElement = screen.getByText(/add todo/i);
        expect(addTodoElement).toBeInTheDocument();
    })
});
