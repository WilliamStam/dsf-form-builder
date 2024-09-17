import {ItemType} from "@/objects/items.ts";
import {clone_object} from "@/utilities.ts"
export type FormType = {
    id: number | null,
    label: string | null,
    created_at: string | null,
    config: ItemType[]
}
import {useState} from 'react';

export const formState = (initial_form: FormType = {
    id: null,
    label: null,
    created_at: null,
    config: []
}) => {
    const [form, setFormHandler] = useState(initial_form);
    return {
        form,
        setForm: (new_form: FormType) => setFormHandler(clone_object(new_form)),
    };
};