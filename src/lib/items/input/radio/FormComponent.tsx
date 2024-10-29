import {ConfigExternalSelectData, FieldComponentProps} from "@/lib/objects";
import {RadioButton, RadioButtonChangeEvent} from "primereact/radiobutton";
import React, {useEffect, useState} from "react";
import {itemConfig, ItemConfigType, OptionType} from "./config.ts";

const FormComponent: React.FC<FieldComponentProps<ItemConfigType>> = ({item, onChange, config}) => {
    const [data, setData] = useState<ItemConfigType>({...itemConfig, ...item});
    const [options, setOptions] = useState<OptionType[]>(data.options)
    
    useEffect(() => {
        setData({...itemConfig, ...item});
    }, [item]);
    
    useEffect(() => {
        setOptions(data.options);
        if (data.source != "local") {
            // console.log("CONFIG", config, data.source)
            const external: ConfigExternalSelectData | undefined = config.external_select_options.find((item) => item.key == data.source)
            if (external) {
                if (external.options) {
                    setOptions(external.options)
                }
                if (external.options_func) {
                    external.options_func().then((y: OptionType[]) => {
                        setOptions(y)
                    })
                    
                    // options = await external.options_func() ?? []
                }
            }
        }
        
    }, [data.source, data.options]);
    
    const handleOnChange = (event: RadioButtonChangeEvent) => {
        const updatedData: ItemConfigType = {...{...itemConfig, ...item}, value: event.target.value};
        onChange(updatedData);
    };
    
    
    
    const id = Math.random().toString(36).substring(2, 15);
    return (
        <>
            <article>
                <div className="flex flex-column gap-2">
                <label htmlFor={id}>{data.label}</label>
                {options.map((option) => {
                    return (
                        <div key={option.value} className="flex align-items-center">
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
    return {}
};
export default FormComponent;