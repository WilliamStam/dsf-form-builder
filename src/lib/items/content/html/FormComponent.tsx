import {FieldComponentProps} from "@/lib/objects";
import React, {useEffect, useState} from "react";
import {itemConfig, ItemConfigType} from "./config.ts";

const FormComponent: React.FC<FieldComponentProps> = ({config, onChange}) => {
    const [item, setItem] = useState<ItemConfigType>({...itemConfig, ...config});
    useEffect(() => {
        setItem({...itemConfig, ...config});
    }, [config]);
    
    const id = Math.random().toString(36).substring(2, 15);
    
    return (
        <>
            <div className="flex flex-column gap-2">
                <label htmlFor={id}>{item.label}</label>
                {<div dangerouslySetInnerHTML={{__html: item.value}}/>}
                
            </div>
        </>
    );
};
export const FormValidation = (item: ItemConfigType) => {
    console.log("Validation", item);
    return {}
};
export default FormComponent;