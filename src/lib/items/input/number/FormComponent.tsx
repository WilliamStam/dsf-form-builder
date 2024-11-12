import {FieldComponentProps} from "@/lib/objects";
import {InputText} from "primereact/inputtext";
import React, {useEffect, useState} from "react";
import {itemConfig, ItemConfigType} from "./config.ts";


const FormComponent: React.FC<FieldComponentProps<ItemConfigType>> = ({item, onChange}) => {
    const [data, setData] = useState<ItemConfigType>({...itemConfig, ...item});
    useEffect(() => {
        setData({...itemConfig, ...item});
    }, [item]);
    
    const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const updatedData: ItemConfigType = {...{...itemConfig, ...item}, value: event.target.value};
        onChange(updatedData);
    };
    
    const id = Math.random().toString(36).substring(2, 15);
    
    return (
        <>
            <article>
                <div className="flex flex-column gap-2">
                <label htmlFor={id}>{data.label}</label>
                <InputText
                    type={"number"}
                    value={data.value}
                    onChange={handleOnChange}
                    placeholder={data.placeholder || ""}
                    className="w-full"
                    id={id}
                ></InputText>
            </div>
            </article>
            
        </>
    );
};
export const FormValidation = (item: ItemConfigType) => {
    console.log("Validation", item);
    return {};
};
export default FormComponent;