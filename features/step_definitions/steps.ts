import {When, Then} from '@cucumber/cucumber'
import {Actor, eventually} from '@cucumber/screenplay'

import World from '../support/World'
import {input, navigate, see} from "../support/tasks";
import assert from "assert";

When('{actor} accesses {string}', async function (actor: Actor<World>, to: string) {
    await actor.attemptsTo(navigate({to}));
})

Then('{actor} sees {string}', async function (actor: Actor<World>, text: string) {
    await eventually(async () => {
        assert.ok(await actor.attemptsTo(see({text})));
    })
})

When('{actor} inputs {string} to input', async function (actor: Actor<World>, text: string) {
    await actor.ask(input({text}));
})
