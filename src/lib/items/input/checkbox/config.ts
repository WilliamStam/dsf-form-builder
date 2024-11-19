import {ItemType} from "@/lib/objects";
import {nanoid} from "nanoid";
import {RegularOption,ButtonBlockOption} from "./options";
import {CheckboxChangeEvent} from "primereact/checkbox";
import React from "react";

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


export type displayOptionsComponentType = React.FC<{
    data: ItemConfigType,
    option: OptionType,
    onChange: (event: CheckboxChangeEvent) => void,
}>
export type displayOptionsType = {
    label: string
    component: displayOptionsComponentType
}

export const displayOptions: { [key: string]: displayOptionsType } = {
    "normal": {
        label: "Normal",
        component: RegularOption
    },
    "button-block": {
        label: "Button Block",
        component: ButtonBlockOption
    }
}