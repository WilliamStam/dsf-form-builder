import {FieldComponentProps} from "@/lib/objects";
import {Dropdown, DropdownChangeEvent} from "primereact/dropdown";
import React, {useEffect, useState} from "react";
import {itemConfig, ItemConfigType} from "./config.ts";

const FormComponent: React.FC<FieldComponentProps> = ({config, onChange}) => {
    const [item, setItem] = useState<ItemConfigType>({...itemConfig, ...config});
    useEffect(() => {
        setItem({...itemConfig, ...config});
    }, [config]);
    const handleOnChange = (event: DropdownChangeEvent) => {
        const updatedData: ItemConfigType = {...{...itemConfig, ...config}, value: event.target.value};
        onChange(updatedData);
    };
    
    
    const id = Math.random().toString(36).substring(2, 15);
    return (
        <>
            <div className="flex flex-column gap-2">
                <label htmlFor={id}>{item.label}</label>
                <Dropdown
                    id={id}
                    value={item.value || ""}
                    onChange={handleOnChange}
                    options={item.options}
                    showClear
                    placeholder={item.placeholder || ""}
                    className={"w-full"}
                > </Dropdown>
            </div>
        </>
    );
};
export const FormValidation = (item: ItemConfigType) => {
    console.log("Validation", item);
    return {}
};
export default FormComponent;