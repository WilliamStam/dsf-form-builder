import {Item} from "@/lib/item";
import {ConfigType, ItemType} from "@/lib/objects";
import {FormType} from "@/lib/objects/forms.ts";
import {ConfigStoreContext, FormStoreContext, useConfigStore, useFormStore} from "@/lib/stores";
import {getFormStore} from "@/lib/stores/formStore.tsx";
import {clone_object} from "@/lib/utilities.ts";
import {diff} from "deep-object-diff";
import {useEffect} from "react";
import "@/lib/styles/styles.scss";
// import style from "./style.css";

let loadcount = 0;

const FormInner = ({...props}: {
    form: FormType,
    onChange: (value: FormType) => void,
    config: ConfigType
}) => {
    console.log("       ****************** FormInner", loadcount++, "******************");
    const {form, setForm} = useFormStore();
    const {config, setConfig} = useConfigStore();
    console.log(config)
    useEffect(() => {
        console.log(props.form);
        setForm(props.form);
    }, [props.form]);
    
    useEffect(() => {
        setConfig(props.config);
    }, [props.config]);
    
    getFormStore().subscribe((state) => {
        console.log("Form useFormStore useEffect form change", diff(state.form, props.form));
        props.onChange(clone_object(state.form));
    });
    
    
    const handleItemChange = (value: ItemType) => {
        console.log("handleItemChange", value);
        const new_form = clone_object<FormType>(form);
        new_form.items = form.items.map((item: ItemType) => {
            if (item.id == value.id) {
                return value;
            }
            return item;
        });
        setForm(new_form);
    };
    
    
    if (form && form.id) {
        return (
            <>
                <div className="form-area">
                    <h1>{form.label}</h1>
                    {form.items.map((item) => (
                        <Item
                            key={`items-${form.id}-${item.id}`}
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
    config: ConfigType
}) => {
    console.log("   ****************** Form", formloadcount++, "******************");
    
    return (<>
        <ConfigStoreContext.Provider initialValue={props.config}>
        <FormStoreContext.Provider initialValue={props.form}>
            <FormInner {...props} />
        </FormStoreContext.Provider>
        </ConfigStoreContext.Provider>
    </>);
    
    
};