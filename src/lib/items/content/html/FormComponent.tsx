import {FieldComponentProps} from "@/lib/objects";
import React, {useEffect, useState} from "react";
import {itemConfig, ItemConfigType} from "./config.ts";

const FormComponent: React.FC<FieldComponentProps<ItemConfigType>> = ({item, onChange}) => {
    const [data, setData] = useState<ItemConfigType>({...itemConfig, ...item});
    useEffect(() => {
        setData({...itemConfig, ...item});
    }, [item]);
    
    const id = Math.random().toString(36).substring(2, 15);
    
    return (
        <>
            <article>
                <div className="flex flex-column gap-2">
                    <label htmlFor={id}>{data.label}</label>
                    {<div dangerouslySetInnerHTML={{__html: data.value}}/>}
                </div>
            </article>
            
        </>
    );
};
export const FormValidation = (item: ItemConfigType) => {
    console.log("Validation", item);
    return {}
};
export default FormComponent;