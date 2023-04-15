import {Actor} from '@cucumber/screenplay'
import World from '../../World';
import {Navigate} from "./types";

export const navigate: Navigate = ({to}) => {
    return async (actor: Actor<World>) => {
        if (to === "top-page") {
            await actor.world.page.goto('https://silverbirder-react-todo-mvc.vercel.app')
        }
    }
}
