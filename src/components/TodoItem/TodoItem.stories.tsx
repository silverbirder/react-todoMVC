import { ComponentStoryObj, ComponentMeta } from "@storybook/react";
import { TodoItem } from ".";
import { TodoContext } from "../context";

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
    (Story) => {
      const deleteTodo = () => console.log("deleteTodo");
      const addTodo = () => console.log("addTodo");
      const toggle = () => console.log("toggle");
      return (
        <TodoContext.Provider value={{ addTodo, deleteTodo, toggle }}>
          <Story />
        </TodoContext.Provider>
      );
    },
  ],
};
export default meta;

export const Ideal: Story = {};
