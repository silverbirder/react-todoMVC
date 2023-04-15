import {setWorldConstructor, Before, After, defineParameterType} from '@cucumber/cucumber'
import {ActorWorld, ActorParameterType} from '@cucumber/screenplay'
import {chromium, Page, Browser} from "playwright";

let browser: Browser;

defineParameterType({...ActorParameterType});

export default class World extends ActorWorld {
    page!: Page;
}

setWorldConstructor(World)

Before(async function (this: World) {
    browser = await chromium.launch({headless: false})
    const context = await browser.newContext();
    this.page = await context.newPage();
})

After(async function (this: World) {
    await browser.close();
})
