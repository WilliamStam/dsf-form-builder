import {Form} from "@/lib";
import {FieldComponentProps, FormType} from "@/lib/objects";
import {useConfigStore} from "@/lib/stores";
import {clone_object} from "@/lib/utilities.ts";
import React, {useEffect, useState} from "react";
import {itemConfig, ItemConfigType} from "./config.ts";

const FormComponent: React.FC<FieldComponentProps<ItemConfigType>> = ({item, onChange}) => {
    const {config} = useConfigStore();
    const [data, setData] = useState<ItemConfigType>({...itemConfig, ...item});
    const [childForm, setChildForm] = useState<FormType | undefined>();
    
    
    // if (data.form_id && data.form_id != childForm?.id) {
    //     setChildForm(config.forms.find((it: FormType) => it.id === data.form_id))
    // }
    
    //
    useEffect(() => {
        setData({...itemConfig, ...item});
        
        if (data.form_id && data.form_id != childForm?.id) {
            setChildForm(config.forms.find((it: FormType) => it.id === data.form_id));
        }
    }, [item]);
    
    //
    // useEffect(() => {
    //     // onChange(data)
    // }, [data]);
    //
    
    //
    const fomrOnChange = (value: FormType) => {
        
        
        const new_data: ItemConfigType = clone_object(data);
        console.log("BAD MEMORIES", new_data);
        new_data.items = value.items;
        console.log(new_data);
        setData(new_data);
        onChange(new_data);
        // setChildForm(new_data)
    };
    
    
    if (childForm) {
        return (
            <>
                <article className={`${item.type}-area`}>
                    <div className="flex flex-column gap-2">
                    <label>{data.label}</label>
                    <Form
                        onChange={fomrOnChange}
                        form={childForm}
                        config={config}
                    />
                    </div>
                </article>
           
            
           
        </>
        );
    } else {
        return (
            <>
                <div>No child form found</div>
            </>
        );
    }
    
    
};

export default FormComponent;