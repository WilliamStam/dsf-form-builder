import {FieldComponentProps} from "@/lib/objects";
import {InputText} from "primereact/inputtext";
import React, {useEffect, useState} from "react";
import {itemConfig, ItemConfigType} from "./config.ts";


const FormComponent: React.FC<FieldComponentProps> = ({config, onChange}) => {
    const [item, setItem] = useState<ItemConfigType>({...itemConfig, ...config});
    useEffect(() => {
        setItem({...itemConfig, ...config});
    }, [config]);
    
    const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const updatedData: ItemConfigType = {...{...itemConfig, ...config}, value: event.target.value};
        onChange(updatedData);
    };
    
    const id = Math.random().toString(36).substring(2, 15);
    
    return (
        <>
            <div className="flex flex-column gap-2">
                <label htmlFor={id}>{item.label}</label>
                <InputText
                    type={"number"}
                    value={item.value}
                    onChange={handleOnChange}
                    placeholder={item.placeholder || ""}
                    className="w-full"
                    id={id}
                ></InputText>
            </div>
        </>
    );
};
export const FormValidation = (item: ItemConfigType) => {
    console.log("Validation", item);
    return {}
};
export default FormComponent;