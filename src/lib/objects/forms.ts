import {useState} from "react";
import {ItemType} from "./items.ts";
import items from "@/lib/items";

export type FormType = {
    id: number | null,
    label: string | null,
    created_at: string | null,
    items: ItemType[]
}

export type onFormChangeType = (form: FormType) => void;
const empty_form = {
    id: null,
    label: null,
    created_at: null,
    items: []
};


const fixFormItems = (value: FormType) : FormType => {
    value.items.map((item: ItemType) => {
        let real_item = items.getByItem(item)
        if (real_item) {
            console.log("fixing item", item, real_item.data, {...real_item.data, ...item})
            return {...real_item.data, ...item}
        }
        return item
    })
    return value
}

export const formState = (initial_form: FormType = empty_form) => {
    const form_data = {...{...empty_form, ...initial_form}}
    
    const [form, _setFormHandler] = useState(fixFormItems(form_data));
    return {
        form,
        setForm: (new_form: FormType) => {
            
            _setFormHandler(fixFormItems({...{...empty_form, ...new_form}}));
        },
    };
};