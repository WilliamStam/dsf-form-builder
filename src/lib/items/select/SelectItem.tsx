import {FieldComponentProps, Item, ItemRenderer, ItemType} from "@/lib/objects";
import {clone_object} from "@/lib/utilities.ts";
import {nanoid} from "nanoid";
import {Accordion, AccordionTab} from "primereact/accordion";
import {Button} from "primereact/button";
import {Dropdown, DropdownChangeEvent} from "primereact/dropdown";
import {InputText} from "primereact/inputtext";
import React, {useEffect, useState} from "react";

type SelectOptionType = {
    value: string
    label: string
}

export type SelectOptionInput = ItemType & {
    label: string
    value: string
    options: SelectOptionType[]
    placeholder: string
}
const itemConfig: SelectOptionInput = {
    id: nanoid(),
    type: "select-select",
    label: "",
    value: "",
    options: [],
    placeholder: ""
};

const FormComponent: React.FC<FieldComponentProps> = ({config, onChange}) => {
    const [item, setItem] = useState<SelectOptionInput>({...itemConfig, ...config});
    useEffect(() => {
        setItem({...itemConfig, ...config});
    }, [config]);
    const handleOnChange = (event: DropdownChangeEvent) => {
        const updatedData: SelectOptionInput = {...{...itemConfig, ...config}, value: event.target.value};
        onChange(updatedData);
    };
    
    
    const id = Math.random().toString(36).substring(2, 15);
    return (
        <>
            <div className="flex flex-column gap-2">
                <label htmlFor={id}>{item.label}</label>
                <Dropdown
                    id={id}
                    value={item.value || ""}
                    onChange={handleOnChange}
                    options={item.options}
                    showClear
                    placeholder={item.placeholder || ""}
                    className={"w-full"}
                > </Dropdown>
            </div>
        </>
    );
};

const SettingsEditOptionItem = ({option, onChange}: {
    option: SelectOptionType,
    onChange: (option: SelectOptionType | null) => void
}) => {
    const [data, setData] = useState<SelectOptionType>(option);
    
    const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const updatedData: SelectOptionType = {
            ...{value: data.value, label: data.label},
            [event.target.name]: event.target.value
        };
        setData(updatedData);
        onChange(updatedData);
    };
    useEffect(() => {
        setData(option);
    }, [option]);
    
    return (
        <>
            <div className="flex flex-row gap-2">
                <Button
                    icon="pi pi-sort"
                    className="px-0 border-noround border-0"
                    style={{width: "1rem", color: "#E1E1E1", background: "transparent"}}
                    severity="secondary"
                    size="small"
                />
                
                <div className="p-inputgroup flex-1">
                    
                    <InputText
                        id={"value"}
                        value={data.value}
                        name={"value"}
                        onChange={handleOnChange}
                        className="flex-1"
                        placeholder="Value"
                    /> <InputText
                    id={"label"}
                    value={data.label}
                    name={"label"}
                    onChange={handleOnChange}
                    className="flex-1"
                    placeholder="Label"
                />
                </div>
                <Button icon={"pi pi-trash"} onClick={() => onChange(null)}/>
            </div>
        </>
    );
};
const SettingsAddOptionItem = ({onInsert}: {
    onInsert: (option: SelectOptionType) => void
}) => {
    const empty_data: SelectOptionType = {
        value: "",
        label: ""
    };
    const [data, setData] = useState<SelectOptionType>(empty_data);
    
    const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const updatedData: SelectOptionType = {
            ...{value: data.value, label: data.label},
            [event.target.name]: event.target.value
        };
        setData(updatedData);
    };
    
    const onAddOption = () => {
        onInsert({...{value: data.value, label: data.label}});
        setData(empty_data);
    };
    
    
    
    return (
        <>
            <div className="flex flex-row gap-2">
                <div className="p-inputgroup flex-1">
                    <InputText
                        id={"value"}
                        value={data.value}
                        name={"value"}
                        onChange={handleOnChange}
                        className=""
                        placeholder="Value"
                    /> <InputText
                    id={"label"}
                    value={data.label}
                    name={"label"}
                    onChange={handleOnChange}
                    className=""
                    placeholder="Label"
                />
                </div>
                <Button
                    icon={"pi pi-plus"}
                    onClick={onAddOption}
                />
            </div>
        
        
        </>
    );
};

const SettingsComponent: React.FC<FieldComponentProps> = ({config, onChange}) => {
    const [data, setData] = useState<SelectOptionInput>({...itemConfig, ...config});
    
    const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const updatedData: SelectOptionInput = {...data, [event.target.name]: event.target.value};
        setData(updatedData);
        onChange(updatedData);
    };
    
    const handleOptionsOnChange = (option: SelectOptionType | null, index: number) => {
        const new_options = clone_object(data.options);
        if (option) {
            new_options[index] = option;
        } else {
            new_options.splice(index, 1);
        }
        console.log(index, new_options);
        const new_data = {...data, options: new_options};
        setData(new_data);
        onChange(new_data);
    };
    useEffect(() => {
        setData({...itemConfig, ...config});
    }, [config]);
    
    const addNewOption = (option: SelectOptionType) => {
        const new_options = clone_object(data.options);
        new_options.push(option);
        const new_data = {...data, options: new_options};
        setData(new_data);
        onChange(new_data);
    };
    
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
                </div>
            </AccordionTab> <AccordionTab header="Options" key="options">
                <div className="form-item flex flex-column gap-4">
                    {data.options.map((item, index) => {
                        return (<SettingsEditOptionItem
                            key={`option-${index}`} option={item} onChange={(option) => {
                            handleOptionsOnChange(option, index);
                        }}
                        />);
                    })} <SettingsAddOptionItem
                    key={`item-new`} onInsert={addNewOption}
                />
                </div>
            </AccordionTab>
            
            </Accordion>
            
            
            {/* <div>{JSON.stringify(config)}</div> */}
        </>
    );
};



export default new Item({
    type: itemConfig.type,
    form: new ItemRenderer({
        render: FormComponent,
        validation: (item: SelectOptionInput) => {
            console.log(item);
            return {}
        }
    }),
    settings: new ItemRenderer({
        render: SettingsComponent,
        validation: (item: SelectOptionInput) => {
            console.log(item);
            return {}
        }
    }),
    heading: "Select box",
    description: "select from a list of items in a drop down",
    hidden: false,
    icon: () => { return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M384 432c8.8 0 16-7.2 16-16l0-320c0-8.8-7.2-16-16-16L64 80c-8.8 0-16 7.2-16 16l0 320c0 8.8 7.2 16 16 16l320 0zm64-16c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 96C0 60.7 28.7 32 64 32l320 0c35.3 0 64 28.7 64 64l0 320zM224 352c-6.7 0-13-2.8-17.6-7.7l-104-112c-6.5-7-8.2-17.2-4.4-25.9s12.5-14.4 22-14.4l208 0c9.5 0 18.2 5.7 22 14.4s2.1 18.9-4.4 25.9l-104 112c-4.5 4.9-10.9 7.7-17.6 7.7z"/></svg>)},
    default_config: itemConfig
});