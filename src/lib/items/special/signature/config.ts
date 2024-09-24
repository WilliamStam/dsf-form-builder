import {ItemType} from "@/lib/objects";
import {nanoid} from "nanoid";
import {PointGroup} from "signature_pad"

export type ItemConfigType = ItemType & {
    label: string
    value: PointGroup[]
    color: string
}

export const itemConfig: ItemConfigType = {
    id: nanoid(),
    type: "special-signature",
    label: "",
    value: [],
    color: "#000000",
};