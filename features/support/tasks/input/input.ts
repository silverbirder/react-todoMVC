import {Actor} from '@cucumber/screenplay'
import World from '../../World';
import {Input} from "./types";

export const input: Input = ({text}) => {
    return async (actor: Actor<World>) => {
        const inputElment = await actor.world.page.getByPlaceholder("what you need to do?");
        await inputElment.type(text);
    }
}
