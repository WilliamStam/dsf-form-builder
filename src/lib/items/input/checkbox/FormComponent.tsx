import {FieldComponentProps} from "@/lib/objects";
import {getOptionsFromExternalData} from "@/lib/objects/config.ts";
import {useConfigStore} from "@/lib/stores";
import {clone_object} from "@/lib/utilities.ts";
import {Checkbox, CheckboxChangeEvent} from "primereact/checkbox";
import React, {useEffect, useState} from "react";
import {itemConfig, ItemConfigType, OptionType} from "./config.ts";
import "./style.scss";

let loadcount = 0;
const FormComponent: React.FC<FieldComponentProps<ItemConfigType>> = ({item, onChange}) => {
    console.log("           ***************", item.type, item.id, loadcount++, "***************");
    const {config,} = useConfigStore();
    const [data, setData] = useState<ItemConfigType>({...itemConfig, ...item});
    const [options, setOptions] = useState<OptionType[] | null>(null);
    
    
    useEffect(() => {
        if (item.source != data.source || options == null) {
            getOptionsFromExternalData(item, config).then(y => setOptions(y));
        }
        setData({...data, ...item});
    }, [item]);
    
    
    const handleOnChange = (event: CheckboxChangeEvent) => {
        const updatedData: ItemConfigType = clone_object({...{...itemConfig, ...item}});
        // onChange(updatedData);
        const v = event.target;
        if (v.checked) {
            updatedData.value.push(v.value);
        } else {
            updatedData.value = updatedData.value.filter((item) => item != v.value);
        }
        console.log("CHECKBOX CHANGE", updatedData);
        setData(updatedData);
        onChange(updatedData);
    };
    
    
    const id = Math.random().toString(36).substring(2, 15);
    return (
        <>
            <article className={`${data.type}-area ${data.display}`}>
                <div className="flex flex-column gap-2">
                <label htmlFor={id}>{data.label}</label>
                    {options && options.map((option) => {
                        return (
                            <div key={`${data.id}-${option.value}`} id={id} className="flex align-items-center">
                            
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