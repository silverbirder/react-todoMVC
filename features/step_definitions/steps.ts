import {Given, When, Then} from '@cucumber/cucumber'
import World from '../support/World'
import assert from "assert";

Given('the Todo App is opened', async function (this: World) {
    await this.page.goto('https://silverbirder-react-todo-mvc.vercel.app');
})

When('the user enters a {string} and enter key', async function (this: World, todo: string) {
    const todoInput = await this.page.getByPlaceholder('what you need to do?');
    await todoInput.type(todo);
    await this.page.keyboard.down('Enter');
})

Then('the {string} is added to the list', async function (this: World, todo: string) {
    const todos = await this.page.getByText(todo);
    assert((await todos.count()) === 1);
})

When('the user enters an empty Todo and clicks the Add button', async function (this: World) {
    const todoInput = await this.page.getByPlaceholder('what you need to do?');
    await todoInput.focus();
    await this.page.keyboard.down('Enter');
})

Then('the Todo is not added to the list and {string} message is displayed', async function (this: World, message: string) {
    const todos = await this.page.getByTestId('todo-title');
    assert((await todos.count()) === 0);
    const messages = await this.page.getByText(message);
    assert((await messages.count()) === 1);
})
