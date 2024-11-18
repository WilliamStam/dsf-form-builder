import {Config, ItemType} from "@/lib/objects";
import { FormType} from "@/lib/objects/forms.ts";

import {Item} from "@/lib/item"
import {FormStoreContext, useConfigStore, useFormStore} from "@/lib/stores";
import {getFormStore} from "@/lib/stores/formStore.tsx";
import {clone_object} from "@/lib/utilities.ts";
import {useEffect, useState} from "react";
import "@/lib/styles/styles.scss";
// import style from "./style.css";

let loadcount = 0;

const FormInner = ({...props}: {
    form: FormType,
    onChange: (value: FormType) => void,
    config: Config
}) => {
    console.log("****************** FormInner", loadcount++, "******************");
    const {form, setForm} = useFormStore();
    const setConfig = useConfigStore((state) => state.setConfig);
    const [items, setItems] = useState<ItemType[]>([]);
    
    useEffect(() => {
        console.log("form useEffect form change")
        setForm(props.form);
        setItems(props.form.items);
    }, [props.form]);

    useEffect(() => {
        setConfig(props.config);
    }, [props.config]);
    console.log(form)
    
    getFormStore().subscribe((state) => {
        props.onChange(clone_object(state.form));
        setItems(clone_object(state.form.items));
        console.log("Form useFormStore useEffect form change")
    })
    
    
    
    const handleItemChange = (value: ItemType) => {
        console.log("handleItemChange", value);
        const new_form = clone_object<FormType>(form);
        new_form.items = form.items.map((item: ItemType) => {
            if (item.id == value.id) {
                return value;
            }
            return item;
        });
        setItems(new_form.items);
        setForm(new_form)
    };
    
    
    if (form && form.id) {
        return (
            <>
                <div className="form-area">
                    <h1>{form.label}</h1>
                        {items.map((item) => (
                            <Item
                                key={item.id}
                                item={item}
                                onChange={handleItemChange}
                            />
                        ))}
                </div>

            </>
        );
    }
    return (
        <>
        <div>No form config loaded</div>
        </>
    );
};
let formloadcount = 0;
export const Form = ({...props}: {
    form: FormType,
    onChange: (value: FormType) => void,
    config: Config
}) => {
    console.log("****************** Form", formloadcount++, "******************");
    
    return (<>
        <FormStoreContext.Provider initialValue={props.form}>
            <FormInner {...props} />
        </FormStoreContext.Provider>
    </>)
    
    
};