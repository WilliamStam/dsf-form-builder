import {OptionType} from "@/lib/items/input/checkbox/config.ts";
import {FieldComponentProps} from "@/lib/objects";
import {getOptionsFromExternalData} from "@/lib/objects/config.ts";
import {useConfigStore} from "@/lib/stores";
import {Dropdown, DropdownChangeEvent} from "primereact/dropdown";
import React, {useEffect, useState} from "react";
import {itemConfig, ItemConfigType} from "./config.ts";

let loadcount = 0;
const FormComponent: React.FC<FieldComponentProps<ItemConfigType>> = ({item, onChange}) => {
    console.log("           ***************", item.type, item.id, loadcount++, "***************");
    const {config} = useConfigStore();
    const [data, setData] = useState<ItemConfigType>({...itemConfig, ...item});
    const [options, setOptions] = useState<OptionType[] | null>(null);
    
    
    useEffect(() => {
        if (item.source != data.source || options == null) {
            getOptionsFromExternalData(item, config).then(y => setOptions(y));
        }
        setData({...data, ...item});
    }, [item]);
    
    const handleOnChange = (event: DropdownChangeEvent) => {
        const updatedData: ItemConfigType = {...{...itemConfig, ...item}, value: event.target.value};
        onChange(updatedData);
        setData(updatedData);
    };
    
    
    const id = Math.random().toString(36).substring(2, 15);
    return (
        <>
            <article className={`${item.type}-area`}>
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
            </article>
            
        </>
    );
};
export const FormValidation = (item: ItemConfigType) => {
    console.log("Validation", item);
    return {};
};
export default FormComponent;