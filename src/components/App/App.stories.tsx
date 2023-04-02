import { ComponentStoryObj, ComponentMeta } from "@storybook/react";
import { App } from ".";
import * as gremlins from "gremlins.js";

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
      const horde = gremlins.createHorde();
      horde.unleash();
      setTimeout(() => {
        horde.stop();
      }, 1000);
      return <Story />;
    },
  ],
};
