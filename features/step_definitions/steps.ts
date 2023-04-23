import {Given, When, Then} from '@cucumber/cucumber'
import World from '../support/World'
import assert from "assert";

Given('the Todo App is opened', async function (this: World) {
    await this.page.goto('https://silverbirder-react-todo-mvc.vercel.app');
})

When('the user enters a new Todo and enter key', async function (this: World) {
    const element = await this.page.getByPlaceholder('what you need to do?');
    await element.type('new Todo');
    await this.page.keyboard.down('Enter');
})

Then('the entered Todo is added to the list', async function (this: World) {
    const elements = await this.page.getByText("new Todo");
    const count = await elements.count();
    assert(count === 1);
})

When('the user enters an empty Todo and clicks the Add button', async function (this: World) {
    const element = await this.page.getByPlaceholder('what you need to do?');
    await element.focus();
    await this.page.keyboard.down('Enter');
})

Then('the Todo is not added to the list and an error message is displayed', async function (this: World) {
    const elements = await this.page.getByText("new Todo");
    const count = await elements.count();
    assert(count === 0);
})
