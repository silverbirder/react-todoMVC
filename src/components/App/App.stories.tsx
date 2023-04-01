import { ComponentStoryObj, ComponentMeta } from "@storybook/react";
import { App } from ".";

type Component = typeof App;
type Meta = ComponentMeta<Component>;
type Story = ComponentStoryObj<Component>;

const meta: Meta = {
  component: App,
};
export default meta;

export const Default: Story = {};
