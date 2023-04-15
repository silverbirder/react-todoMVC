import {Actor} from '@cucumber/screenplay'
import World from '../../World';
import {See} from "./types";

export const see: See = ({text}) => {
    return async (actor: Actor<World>) => {
        const element = await actor.world.page.getByText(text);
        return (await element.count()) > 0;
    }
}
