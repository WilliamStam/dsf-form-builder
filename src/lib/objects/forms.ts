import items from "@/lib/items";
import {is_different} from "@/lib/utilities.ts";
import {diff} from "deep-object-diff";
import {ItemType} from "./items.ts";

export type FormType = {
    id: number | null,
    label: string | null,
    created_at: string | null,
    items: ItemType[]
}

export type onFormChangeType = (form: FormType) => void;
export const empty_form = {
    id: null,
    label: null,
    created_at: null,
    items: []
};


export const fixFormItems = (value: FormType): FormType => {
    value.items.map((item: ItemType) => {
        let real_item = items.getByItem(item);
        if (real_item && is_different(real_item.data, item)) {
            console.log("fixing item", diff(item, real_item.data));
            return {...real_item.data, ...item};
        }
        return item;
    });
    return value;
};
//
// export const formState = (initial_form: FormType = empty_form) => {
//     const form_data = {...{...empty_form, ...initial_form}}
//
//     const [form, _setFormHandler] = useState(fixFormItems(form_data));
//     return {
//         form,
//         setForm: (new_form: FormType) => {
//
//             _setFormHandler(fixFormItems({...{...empty_form, ...new_form}}));
//         },
//     };
// };