import {FieldComponentProps} from "@/lib/objects";
import {Accordion, AccordionTab} from "primereact/accordion";
import {InputText} from "primereact/inputtext";
import React, {useEffect, useState} from "react";
import {itemConfig, ItemConfigType} from "./config.ts";

const SettingsComponent: React.FC<FieldComponentProps<ItemConfigType>> = ({item, onChange, config}) => {
    const [data, setData] = useState<ItemConfigType>({...itemConfig, ...item});
    
    const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const updatedData: ItemConfigType = {...data, [event.target.name]: event.target.value};
        setData(updatedData);
        onChange(updatedData);
    };
    
    
    useEffect(() => {
        setData({...itemConfig, ...config});
    }, [config]);
    
    
    return (
        <>
            <Accordion activeIndex={0}> <AccordionTab header="General" key="general">
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
                    <div className="flex flex-column gap-2">
                        <label htmlFor={"placeholder"}>Placeholder</label>
                        <InputText
                            id={"placeholder"}
                            value={data.placeholder || ""}
                            name={"placeholder"}
                            onChange={handleOnChange}
                            className="w-full"
                        />
                    </div>
                    <div className="flex flex-column gap-2">
                        <label htmlFor={"format"}>Format</label>
                        <InputText
                            id={"format"}
                            value={data.format || ""}
                            name={"format"}
                            onChange={handleOnChange}
                            className="w-full"
                        />
                        <ul>
                            <li>d - day of month (no leading zero)
                            </li>
                            <li>dd - day of month (two digit)
                            </li>
                            <li>o - day of the year (no leading zeros)
                            </li>
                            <li>oo - day of the year (three digit)
                            </li>
                            <li>D - day name short
                            </li>
                            <li>DD - day name long
                            </li>
                            <li>m - month of year (no leading zero)
                            </li>
                            <li>mm - month of year (two digit)
                            </li>
                            <li>M - month name short
                            </li>
                            <li>MM - month name long
                            </li>
                            <li>y - year (two digit)
                            </li>
                            <li>yy - year (four digit)</li>
                        </ul>
                    </div>
                </div>
            </AccordionTab> </Accordion>
        
        </>
    );
};
export default SettingsComponent;

export const SettingsValidation = (item: ItemConfigType) => {
    console.log("Validation", item);
    return {}
};