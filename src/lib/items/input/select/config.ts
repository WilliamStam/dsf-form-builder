import {ItemType} from "@/lib/objects";
import {nanoid} from "nanoid";

export type SelectOptionType = {
    value: string
    label: string
}

export type ItemConfigType = ItemType & {
    label: string
    value: string
    source: string
    options: SelectOptionType[]
    placeholder: string
}
export const itemConfig: ItemConfigType = {
    id: nanoid(),
    type: "select-select",
    label: "",
    value: "",
    source: "local",
    options: [],
    placeholder: ""
};