// initial page load's url
function url() {
    return "https://silverbirder-react-todo-mvc.vercel.app";
}

// action where you suspect the memory leak might be happening
async function action(page) {
    await page.type('.new-todo', 'Hello World');
    await page.keyboard.press('Enter');
}

// how to go back to the state before action
async function back(page) {
    await page.hover('.view');
    await page.click('.destroy');
}

module.exports = {action, back, url};
