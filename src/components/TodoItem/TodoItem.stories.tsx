import { ComponentStoryObj, ComponentMeta } from "@storybook/react";
import { TodoItem } from ".";

type Component = typeof TodoItem;
type Meta = ComponentMeta<Component>;
type Story = ComponentStoryObj<Component>;

const meta: Meta = {
  component: TodoItem,
  args: {
    todo: { id: "1", title: "title", completed: false },
  },
  decorators: [
    (Story) => {
      return (
        <div className="todoapp">
          <ul className="todo-list">
            <Story />
          </ul>
        </div>
      );
    },
  ],
};
export default meta;

export const Default: Story = {};
