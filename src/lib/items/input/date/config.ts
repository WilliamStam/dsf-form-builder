// @ts-nocheck
import {ItemType} from "@/lib/objects";
import {nanoid} from "nanoid";

export type ItemConfigType = ItemType & {
    label: string
    value: string
    placeholder: string
    format: string
}

export const itemConfig: ItemConfigType = {
    id: nanoid(),
    type: "input-date",
    label: "",
    value: "",
    placeholder: "",
    format: "yy-mm-dd",
};