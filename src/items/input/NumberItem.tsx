import {FieldComponentProps, Item, ItemRenderer, ItemType} from "@/objects/items.ts";
import {nanoid} from "nanoid";
import {Accordion, AccordionTab} from "primereact/accordion";
import {InputText} from "primereact/inputtext";
import React, {useEffect, useState} from "react";

export type TextNumberInputConfig = ItemType & {
    label: string
    value: string
    placeholder: string
}

const itemConfig: TextNumberInputConfig = {
    id: nanoid(),
    type: "text-number",
    label: "",
    value: "",
    placeholder: ""
};

const FormComponent: React.FC<FieldComponentProps> = ({config, onChange}) => {
    const [item, setItem] = useState<TextNumberInputConfig>({...itemConfig, ...config});
    useEffect(() => {
        setItem({...itemConfig, ...config});
    }, [config]);
    
    const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const updatedData: TextNumberInputConfig = {...{...itemConfig, ...config}, value: event.target.value};
        onChange(updatedData);
    };
    
    const id = Math.random().toString(36).substring(2, 15);
    
    return (
        <>
            <div className="flex flex-column gap-2">
                <label htmlFor={id}>{item.label}</label>
                <InputText
                    type={"number"}
                    value={item.value}
                    onChange={handleOnChange}
                    placeholder={item.placeholder || ""}
                    className="w-full"
                    id={id}
                ></InputText>
            </div>
        </>
    );
};
const SettingsComponent: React.FC<FieldComponentProps> = ({config, onChange}) => {
    const [data, setData] = useState<TextNumberInputConfig>({...itemConfig, ...config});
    
    const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const updatedData: TextNumberInputConfig = {...data, [event.target.name]: event.target.value};
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
                </div>
            </AccordionTab> </Accordion>
        </>
    );
};

export default new Item({
    type: itemConfig.type,
    form: new ItemRenderer({
        render: FormComponent,
        validation: (item: TextNumberInputConfig) => {
            console.log(item);
            return {}
        }
    }),
    settings: new ItemRenderer({
        render: SettingsComponent,
        validation: (item: TextNumberInputConfig) => {
            console.log(item);
            return {}
        }
    }),
    heading: "Number input",
    description: "a simple box to insert a number value into",
    hidden: false,
    icon: ["fas", "7"],
    default_config: itemConfig
});