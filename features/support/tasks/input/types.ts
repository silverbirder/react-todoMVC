import World from "../../World";
// @ts-ignore
import type {PromiseAction} from '@cucumber/screenplay'

export type Input = ({text}: { text: string }) => PromiseAction<void, World>
