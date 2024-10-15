import {ItemType} from "@/lib/objects";
import {nanoid} from "nanoid";

export type ItemConfigType = ItemType & {
    label: string
    form_id: number | string
}

export const itemConfig: ItemConfigType = {
    id: nanoid(),
    type: "embedded-form",
    label: "",
    form_id: "",
};