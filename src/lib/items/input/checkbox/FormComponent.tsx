import {ConfigExternalDataType, FieldComponentProps} from "@/lib/objects";
import {useConfigStore} from "@/lib/stores";
import {clone_object} from "@/lib/utilities.ts";
import {Checkbox, CheckboxChangeEvent} from "primereact/checkbox";
import React, {useEffect, useState} from "react";
import {itemConfig, ItemConfigType, OptionType} from "./config.ts";
import "./style.scss";

const FormComponent: React.FC<FieldComponentProps<ItemConfigType>> = ({item, onChange}) => {
    const {config} = useConfigStore();
    const [data, setData] = useState<ItemConfigType>({...itemConfig, ...item});
    const [options, setOptions] = useState<OptionType[]>(data.options);
    
    useEffect(() => {
        setData({...itemConfig, ...item});
    }, [item]);
    
    
    useEffect(() => {
        setOptions(data.options);
        if (data.source != "local") {
            // console.log("CONFIG", config, data.source)
            const external: ConfigExternalDataType | undefined = config.external_data.find((item) => item.key == data.source);
            if (external) {
                if (external.options) {
                    setOptions(external.options);
                }
                if (external.options_func) {
                    external.options_func().then((y: OptionType[]) => {
                        setOptions(y);
                    });
                    
                    // options = await external.options_func() ?? []
                }
            }
        }
        
    }, [data.source, data.options]);
    
    const handleOnChange = (event: CheckboxChangeEvent) => {
        const updatedData: ItemConfigType = clone_object({...{...itemConfig, ...item}});
        // onChange(updatedData);
        const v = event.target;
        console.log("CHECKBOX CHANGE", updatedData);
        if (v.checked) {
            updatedData.value.push(v.value);
        } else {
            updatedData.value = updatedData.value.filter((item) => item != v.value);
        }
        onChange(updatedData);
        
        console.log("CHECKBOX CHANGE", event);
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
                            
                            <Checkbox
                                inputId={option.value}
                                name="value"
                                value={option.value}
                                onChange={handleOnChange}
                                checked={data.value.includes(option.value)}
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