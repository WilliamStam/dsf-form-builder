import {FieldComponentProps, formState, FormType} from "@/lib/objects";
import React, {useEffect, useState} from "react";
import {itemConfig, ItemConfigType} from "./config.ts";
import {Form} from "@/lib"

const FormComponent: React.FC<FieldComponentProps> = ({item, onChange, form, config}) => {
    const [data, setData] = useState<ItemConfigType>({...itemConfig, ...item});
    useEffect(() => {
        setData({...itemConfig, ...item});
    }, [item]);
    
    const child_form = config.forms.find((item: FormType) => item.id === data.form_id)
    if (child_form) {
        return (
            <>
           
            <div style={{"background":"red"}}>
                <Form
                    onChange={() => {
                    }}
                    form={child_form}
                    config={config}
                />
            </div>
           
        </>
        );
    } else {
        return (
            <>
                <div>No child form found</div>
            </>
        )
    }
    
    
};

export default FormComponent;