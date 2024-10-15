import {Config, ItemType} from "@/lib/objects";
import {formState, FormType} from "@/lib/objects/forms.ts";
import "primereact/resources/themes/lara-light-cyan/theme.css";
// import "primereact/resources/themes/lara-dark-cyan/theme.css";
import "primereact/resources/primereact.min.css"; //core css
import "primeicons/primeicons.css"; //icons
import "primeflex/primeflex.css";

import {Item} from "@/lib/item"
import {useEffect} from "react";

// import style from "./style.css";


export const Form = ({...props}: {
    form: FormType,
    onChange: (form: FormType) => void,
    config: Config
}) => {
    const {form, setForm} = formState(props.form);
    useEffect(() => {
        if (props.form) {
            console.log("useEffect", "props.form", props.form);
            setForm(props.form);
        }
    }, [props.form]);
    //
    useEffect(() => {
        if (form) {
            console.log("useEffect", "form", form);
            props.onChange(form);
        }
    }, [form]);
    
    const handleItemChange = (value: ItemType) => {
        console.log("handleItemChange", value);
        form.items = form.items.map((item: ItemType) => {
            if (item.id == value.id) {
                return value;
            }
            return item;
        });
        setForm(form)
    };
    
    if (form && form.id) {
        return (
            <>
                <div className="form-area">
                    <h1>{form.label}</h1>
                    {form.items?.map((item) => (
                        <Item
                            key={item.id}
                            item={item}
                            onChange={handleItemChange}
                            form={form}
                            config={props.config}
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