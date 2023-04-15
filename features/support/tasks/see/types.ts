import World from "../../World";
// @ts-ignore
import type {PromiseAction} from '@cucumber/screenplay'

export type See = ({text}: { text: string }) => PromiseAction<boolean, World>
