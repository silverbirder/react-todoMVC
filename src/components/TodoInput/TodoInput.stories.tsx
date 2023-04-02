import { ComponentStoryObj, ComponentMeta } from "@storybook/react";
import { TodoInput } from ".";
import { TodoContext } from "../context";

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
