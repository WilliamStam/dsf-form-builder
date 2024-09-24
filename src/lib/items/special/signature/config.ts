import {ItemType} from "@/lib/objects";
import {nanoid} from "nanoid";

export type ItemConfigType = ItemType & {
    label: string
    value: string
    color: string
}

export const itemConfig: ItemConfigType = {
    id: nanoid(),
    type: "special-signature",
    label: "",
    value: "",
    color: "#000000",
};