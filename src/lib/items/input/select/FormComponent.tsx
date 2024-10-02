import {ConfigExternalSelectData, FieldComponentProps} from "@/lib/objects";
import {Dropdown, DropdownChangeEvent} from "primereact/dropdown";
import React, {useEffect, useState} from "react";
import {itemConfig, ItemConfigType, SelectOptionType} from "./config.ts";

const FormComponent: React.FC<FieldComponentProps> = ({item, onChange, config}) => {
    const [data, setData] = useState<ItemConfigType>({...itemConfig, ...item});
    const [options, setOptions] = useState<SelectOptionType[]>(data.options)
    
    useEffect(() => {
        setData({...itemConfig, ...item});
    }, [item]);
    
    useEffect(() => {
        setOptions(data.options);
        if (data.source != "local") {
            console.log("CONFIG", config, data.source)
            const external: ConfigExternalSelectData | undefined = config.external_select_options.find((item) => item.key == data.source)
            if (external) {
                if (external.options) {
                    setOptions(external.options)
                }
                if (external.options_func) {
                    external.options_func().then((y: SelectOptionType[]) => {
                        console.log("yyyyyyyyyyyy", y)
                        setOptions(y)
                    })
                    
                    // options = await external.options_func() ?? []
                }
            }
        }
        
    }, [data.source, data.options]);
    
    const handleOnChange = (event: DropdownChangeEvent) => {
        const updatedData: ItemConfigType = {...{...itemConfig, ...item}, value: event.target.value};
        onChange(updatedData);
    };
    
    
    
    const id = Math.random().toString(36).substring(2, 15);
    return (
        <>
            <div className="flex flex-column gap-2">
                <label htmlFor={id}>{data.label}</label>
                <Dropdown
                    id={id}
                    value={data.value || ""}
                    onChange={handleOnChange}
                    options={options}
                    showClear
                    placeholder={data.placeholder || ""}
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