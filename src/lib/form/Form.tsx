import {Config, ItemType} from "@/lib/objects";
import { FormType} from "@/lib/objects/forms.ts";

import {Item} from "@/lib/item"
import {useConfigStore, useFormStore} from "@/lib/stores";
import {clone_object} from "@/lib/utilities.ts";
import {useEffect, useState} from "react";
import "@/lib/styles/styles.scss";
// import style from "./style.css";


export const Form = ({...props}: {
    form: FormType,
    onChange: (value: FormType) => void,
    config: Config
}) => {
    const {form, setForm} = useFormStore();
    const setConfig = useConfigStore((state) => state.setConfig);
    const [items, setItems] = useState<ItemType[]>(form.items);
    
    useEffect(() => {
        console.log("form useEffect form change")
        setForm(props.form);
        setItems(props.form.items);
    }, [props.form]);
    
    useEffect(() => {
        setConfig(props.config);
    }, [props.config]);
    // console.log(form)
    
    useEffect(() => useFormStore.subscribe((state) => {
        props.onChange(clone_object(state.form));
        setItems(state.form.items);
        console.log("Form useFormStore useEffect form change")
    }));
    
    
    
    
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