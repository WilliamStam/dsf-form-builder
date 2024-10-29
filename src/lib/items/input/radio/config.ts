import {ItemType} from "@/lib/objects";
import {nanoid} from "nanoid";

export type OptionType = {
    value: string
    label: string
}

export type ItemConfigType = ItemType & {
    label: string
    value: string
    source: string
    options: OptionType[]
}
export const itemConfig: ItemConfigType = {
    id: nanoid(),
    type: "input-radio",
    label: "",
    value: "",
    source: "local",
    options: [],
};