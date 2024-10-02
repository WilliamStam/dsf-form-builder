// @ts-nocheck
import {FieldComponentProps} from "@/lib/objects";
import {Calendar} from "primereact/calendar";
import {FormEvent} from "primereact/ts-helpers";
import React, {useEffect, useState} from "react";
import {ItemConfigType, itemConfig} from "./config.ts";


const FormComponent: React.FC<FieldComponentProps> = ({item, onChange, config}) => {
    const [data, setData] = useState<ItemConfigType>({...itemConfig, ...item});
    useEffect(() => {
        setItem({...itemConfig, ...item});
    }, [item]);
    
    const handleOnChange = (event: FormEvent<(Date | null)[]>) => {
        const updatedData: DateInputConfig = {...{...itemConfig, ...item}, value: event.value};
        onChange(updatedData);
        setItem(updatedData);
        // console.log(event.value as Date);
        
    };
    
    const id = Math.random().toString(36).substring(2, 15);
    
    
    return (
        <>
            <Calendar// value={date} // viewDate={date}
                onChange={(e) => {
                    // setDate(e.value);
                    console.log(e.value);
                }}
                dateFormat="yy-mm-dd"
            />
            
        </>
    );
};
export const FormValidation = (item: ItemConfigType) => {
    console.log("Validation", item);
    return {}
};
export default FormComponent;