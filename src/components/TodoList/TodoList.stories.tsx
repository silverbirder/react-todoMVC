import { ComponentStoryObj, ComponentMeta } from "@storybook/react";
import { TodoList } from ".";

type Component = typeof TodoList;
type Meta = ComponentMeta<Component>;
type Story = ComponentStoryObj<Component>;

const meta: Meta = {
  component: TodoList,
  args: {
    todos: [
      { id: "1", title: "title", completed: false },
      { id: "2", title: "title", completed: false },
    ],
  },
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
