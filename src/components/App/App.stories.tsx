import {ComponentStoryObj, ComponentMeta} from "@storybook/react";
import {App} from ".";
import chaosFrontendToolkit from "chaos-frontend-toolkit";
import {userEvent, within} from "@storybook/testing-library";

type Component = typeof App;
type Meta = ComponentMeta<Component>;
type Story = ComponentStoryObj<Component>;

const meta: Meta = {
    component: App,
};
export default meta;

export const Ideal: Story = {};
export const Monkey: Story = {
    decorators: [
        (Story) => {
            chaosFrontendToolkit.gremlins.start({numberOfWaves: 100});
            return <Story/>;
        }
    ],
};

export const InteractionScenario: Story = {
    play: async ({canvasElement}) => {
        const canvas = within(canvasElement);
    },
};
