import { ComponentStoryObj, ComponentMeta } from "@storybook/react";
import { TodoInput } from ".";

type Component = typeof TodoInput;
type Meta = ComponentMeta<Component>;
type Story = ComponentStoryObj<Component>;

const meta: Meta = {
  component: TodoInput,
  decorators: [
    (Story) => {
      return (
        <div className="todoapp">
          <Story />
        </div>
      );
    },
  ],
};
export default meta;

export const Default: Story = {};
