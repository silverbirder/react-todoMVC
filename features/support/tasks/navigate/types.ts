import World from "../../World";
// @ts-ignore
import type {PromiseAction} from '@cucumber/screenplay'

export type Navigate = ({to}: { to: string }) => PromiseAction<void, World>
