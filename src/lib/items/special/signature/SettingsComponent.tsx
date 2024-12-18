import {FieldComponentProps} from "@/lib/objects";
import {Accordion, AccordionTab} from "primereact/accordion";
import {InputText} from "primereact/inputtext";
import React, {useEffect, useState} from "react";
import {itemConfig, ItemConfigType} from "./config.ts";

const SettingsComponent: React.FC<FieldComponentProps<ItemConfigType>> = ({item, onChange}) => {
    const [data, setData] = useState<ItemConfigType>({...itemConfig, ...item});
    
    const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const updatedData: ItemConfigType = {...data, [event.target.name]: event.target.value};
        setData(updatedData);
        onChange(updatedData);
    };
    
    useEffect(() => {
        setData({...itemConfig, ...item});
    }, [item]);
    
    
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
            </AccordionTab>
            
            </Accordion>
        
        </>
    );
};
export default SettingsComponent;

export const SettingsValidation = (item: ItemConfigType) => {
    console.log("Validation", item);
    return {};
};