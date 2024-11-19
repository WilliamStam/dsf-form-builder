import {ButtonBlockOption, RegularOption} from "./options";
import {ItemType} from "@/lib/objects";
import {nanoid} from "nanoid";
import {RadioButtonChangeEvent} from "primereact/radiobutton";
import React from "react";

export type OptionType = {
    value: string
    label: string
}

export type ItemConfigType = ItemType & {
    label: string
    value: string
    source: string
    display: string
    options: OptionType[]
}
export const itemConfig: ItemConfigType = {
    id: nanoid(),
    type: "input-radio",
    label: "",
    value: "",
    source: "local",
    display: "normal",
    options: [],
};


export type displayOptionsComponentType = React.FC<{
    data: ItemConfigType,
    option: OptionType,
    onChange: (event: RadioButtonChangeEvent) => void,
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