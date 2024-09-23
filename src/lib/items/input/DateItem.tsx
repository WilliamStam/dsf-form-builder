// @ts-nocheck
import {FieldComponentProps, Item, ItemRenderer, ItemType} from "@/lib/objects";
import {nanoid} from "nanoid";
import {Accordion, AccordionTab} from "primereact/accordion";
import {Calendar} from "primereact/calendar";
import {InputText} from "primereact/inputtext";
import {FormEvent} from "primereact/ts-helpers";
import React, {useEffect, useState} from "react";

export type DateInputConfig = ItemType & {
    label: string
    value: string
    placeholder: string
    format: string
}

const itemConfig: DateInputConfig = {
    id: nanoid(),
    type: "input-date",
    label: "",
    value: "",
    placeholder: "",
    format: "yy-mm-dd",
};


const FormComponent: React.FC<FieldComponentProps> = ({config, onChange}) => {
    const [item, setItem] = useState<DateInputConfig>({...itemConfig, ...config});
    useEffect(() => {
        setItem({...itemConfig, ...config});
    }, [config]);
    
    const handleOnChange = (event: FormEvent<(Date | null)[]>) => {
        console.log(event.value);
        const updatedData: DateInputConfig = {...{...itemConfig, ...config}, value: event.value};
        onChange(updatedData);
        setItem(updatedData);
        // console.log(event.value as Date);
        
    };
    
    const id = Math.random().toString(36).substring(2, 15);
    
   
    return (
        <>
            <Calendar
                // value={date}
                // viewDate={date}
                onChange={(e) => {
                    // setDate(e.value);
                    console.log(e.value);
                }}
                dateFormat="yy-mm-dd"
            />
            
            {/* <div className="flex flex-column gap-2"> */}
            {/*     <div>{JSON.stringify(item)}</div> */}
            {/*     <label htmlFor={id}>{item.label}</label> */}
            {/*      */}
            {/*     <Calendar */}
            {/*         // value={item.value} */}
            {/*         // viewDate={item.value} */}
            {/*         onChange={handleOnChange} */}
            {/*         placeholder={item.placeholder || ""} */}
            {/*         className="w-full" */}
            {/*         id={id} */}
            {/*         dateFormat={item.format} */}
            {/*         showIcon */}
            {/*     ></Calendar> */}
            {/* </div> */}
        </>
    );
};
const SettingsComponent: React.FC<FieldComponentProps> = ({config, onChange}) => {
    const [data, setData] = useState<DateInputConfig>({...itemConfig, ...config});
    
    const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const updatedData: DateInputConfig = {...data, [event.target.name]: event.target.value};
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

export default new Item({
    type: itemConfig.type,
    form: new ItemRenderer({
        render: FormComponent,
        validation: (item: DateInputConfig) => {
            console.log(item);
            return {};
        }
    }),
    settings: new ItemRenderer({
        render: SettingsComponent,
        validation: (item: DateInputConfig) => {
            console.log(item);
            return {};
        }
    }),
    heading: "Date picker input",
    description: "a simple box to select a date",
    hidden: false,
    icon: () => {
        return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M152 24c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 40L64 64C28.7 64 0 92.7 0 128l0 16 0 48L0 448c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-256 0-48 0-16c0-35.3-28.7-64-64-64l-40 0 0-40c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 40L152 64l0-40zM48 192l80 0 0 56-80 0 0-56zm0 104l80 0 0 64-80 0 0-64zm128 0l96 0 0 64-96 0 0-64zm144 0l80 0 0 64-80 0 0-64zm80-48l-80 0 0-56 80 0 0 56zm0 160l0 40c0 8.8-7.2 16-16 16l-64 0 0-56 80 0zm-128 0l0 56-96 0 0-56 96 0zm-144 0l0 56-64 0c-8.8 0-16-7.2-16-16l0-40 80 0zM272 248l-96 0 0-56 96 0 0 56z"/></svg>)},
    default_config: itemConfig
});