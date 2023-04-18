import {render, screen} from "@testing-library/react";
import {App} from ".";
import {composeStories} from '@storybook/testing-react';
import * as stories from './App.stories';

const {InteractionScenario} = composeStories(stories);

test("renders todos text", () => {
    render(<App/>);
    const linkElement = screen.getByText(/todos/i);
    expect(linkElement).toBeInTheDocument();
});

test("play InteractionScenario", async () => {
    const {container} = render(<InteractionScenario/>);
    await InteractionScenario.play({canvasElement: container});
    const linkElement = screen.getByText(/todos/i);
    expect(linkElement).toBeInTheDocument();
})
