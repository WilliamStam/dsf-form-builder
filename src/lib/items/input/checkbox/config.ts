import {ItemType} from "@/lib/objects";
import {nanoid} from "nanoid";

export type OptionType = {
    value: string
    label: string
}

export type ItemConfigType = ItemType & {
    label: string
    value: string[]
    source: string
    display: string
    options: OptionType[]
}
export const itemConfig: ItemConfigType = {
    id: nanoid(),
    type: "input-checkbox",
    label: "",
    value: [],
    source: "local",
    display: "normal",
    options: [],
};