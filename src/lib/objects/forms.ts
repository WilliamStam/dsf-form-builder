import {useState} from "react";
import {ItemType} from "./items.ts";

export type FormType = {
    id: number | null,
    label: string | null,
    created_at: string | null,
    config: ItemType[]
}

export type onFormChangeType = (form: FormType) => void;
const empty_form = {
    id: null,
    label: null,
    created_at: null,
    config: []
};

export const formState = (initial_form: FormType = empty_form) => {
    const [form, _setFormHandler] = useState({...{...empty_form, ...initial_form}});
    return {
        form,
        setForm: (new_form: FormType) => {
            _setFormHandler({...{...empty_form, ...new_form}});
        },
    };
};