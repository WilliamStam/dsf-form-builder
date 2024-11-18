import {FieldComponentProps, FormType} from "@/lib/objects";
import {useConfigStore, useFormStore} from "@/lib/stores";
import {Accordion, AccordionTab} from "primereact/accordion";
import {Dropdown, DropdownChangeEvent} from "primereact/dropdown";
import {InputText} from "primereact/inputtext";
import {SelectItemOptionsType} from "primereact/selectitem";
import React, {useEffect, useState} from "react";
import {itemConfig, ItemConfigType} from "./config.ts";




const SettingsComponent: React.FC<FieldComponentProps<ItemConfigType>> = ({item, onChange}) => {
    const {form} = useFormStore();
    const {config} = useConfigStore();
    const [data, setData] = useState<ItemConfigType>({...itemConfig, ...item});
    
    const handleOnChange = (event: React.ChangeEvent<HTMLInputElement> | DropdownChangeEvent) => {
        const updatedData: ItemConfigType = {...data, [event.target.name]: event.target.value};
        setData(updatedData);
        onChange(updatedData);
    };
    
    useEffect(() => {
        setData({...itemConfig, ...item});
    }, [item]);
    
    // generate a list of dropdown options
    // exclude the current form - you cant add the current form as a child of itself
    
    const options: SelectItemOptionsType = config.forms.map((item:FormType)=>{
        return {value: item.id, label: item.label}
    }).filter(item => item.value != form.id)
    
    return (
        <>
            <Accordion activeIndex={0}>
                <AccordionTab header="General" key="general">
                <div className="form-item flex flex-column gap-4">
                    
                    <div className="flex flex-column gap-2">
                        <label htmlFor={"label"}>Label</label>
                        <InputText
                            id={"label"}
                            value={data.label || ""}
                            name={"label"}
                            onChange={handleOnChange}
                            className="w-full"
                        />
                    </div>
                </div>
                    <div className="flex flex-column gap-2">
                <label htmlFor={"form_id"}>Form</label>
                <Dropdown
                    id={"form_id"}
                    value={data.form_id || ""}
                    onChange={handleOnChange}
                    options={options}
                    name="form_id"
                    showClear
                    placeholder="Select a form"
                    className={"w-full"}
                > </Dropdown>
            </div>
            </AccordionTab>
            
            </Accordion>
        
        </>
    );
};
export default SettingsComponent;

export const SettingsValidation = (item: ItemConfigType) => {
    console.log("Validation", item);
    return {}
};