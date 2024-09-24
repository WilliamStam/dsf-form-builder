import {ItemType} from "@/lib/objects";
import {nanoid} from "nanoid";

export type ItemConfigType = ItemType & {
    label: string
    value: string
    placeholder: string
}

export const itemConfig: ItemConfigType = {
    id: nanoid(),
    type: "input-text",
    label: "",
    value: "",
    placeholder: "",
};