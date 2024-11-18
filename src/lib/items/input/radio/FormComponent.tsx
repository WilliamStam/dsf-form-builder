import {ConfigExternalDataType, FieldComponentProps} from "@/lib/objects";
import {getOptionsFromExternalData} from "@/lib/objects/config.ts";
import {useConfigStore} from "@/lib/stores";
import {RadioButton, RadioButtonChangeEvent} from "primereact/radiobutton";
import React, {useEffect, useState} from "react";
import {itemConfig, ItemConfigType, OptionType} from "./config.ts";

let loadcount = 0
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
    
   
    
    const handleOnChange = (event: RadioButtonChangeEvent) => {
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
                    {options.map((option) => {
                        return (
                            <div key={`${item.id}-${option.value}`} className="flex align-items-center">
                        <RadioButton
                            inputId={option.value}
                            name="value"
                            value={option.value}
                            onChange={handleOnChange}
                            checked={data.value == option.value}
                        />
                        <label htmlFor={option.value} className="ml-2">{option.label}</label>
                    </div>
                        );
                    })}
                
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