import {FieldComponentProps} from "@/lib/objects";
import {clone_object} from "@/lib/utilities.ts";
import {InputText} from "primereact/inputtext";
import React, {useEffect, useState} from "react";
import {itemConfig, ItemConfigType} from "./config.ts";

let loadcount = 0
const FormComponent: React.FC<FieldComponentProps<ItemConfigType>> = ({item, onChange}) => {
    console.log("           ***************", item.type, item.id, loadcount++, "***************");
    const [data, setData] = useState<ItemConfigType>({...itemConfig, ...item});
    useEffect(() => {
        setData({...itemConfig, ...item});
    }, [item]);
    
    
    const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const updatedData: ItemConfigType = {...{...itemConfig, ...item}, value: event.target.value};
        
        onChange(clone_object(updatedData));
        setData(updatedData);
    };
    
    
    const id = Math.random().toString(36).substring(2, 15);
    
    return (
        <>
            <article className={`${item.type}-area`}>
                <div className="flex flex-column gap-2">
                <label htmlFor={id}>{data.label}</label>
                <InputText
                    value={data.value}
                    onChange={handleOnChange}
                    placeholder={data.placeholder}
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