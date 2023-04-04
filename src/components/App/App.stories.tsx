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
      const randomizer = new gremlins.Chance(new gremlins.Chance().random());
      const horde = gremlins.createHorde({
        randomizer,
      });
      console.log("random seed", randomizer.seed);
      horde.unleash();
      setTimeout(() => {
        horde.stop();
      }, 5000);
      return <Story />;
    },
  ],
};
