import {FieldComponentProps, Item, ItemRenderer, ItemType} from "@/lib/objects";
import {nanoid} from "nanoid";
import {Accordion, AccordionTab} from "primereact/accordion";
import {InputText} from "primereact/inputtext";
import React, {useEffect, useState} from "react";

export type TextInputConfig = ItemType & {
    label: string
    value: string
    placeholder: string
}

const itemConfig: TextInputConfig = {
    id: nanoid(),
    type: "input-text",
    label: "",
    value: "",
    placeholder: "",
};

const FormComponent: React.FC<FieldComponentProps> = ({config, onChange}) => {
    const [item, setItem] = useState<TextInputConfig>({...itemConfig, ...config});
    useEffect(() => {
        setItem({...itemConfig, ...config});
    }, [config]);
    
    const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const updatedData: TextInputConfig = {...{...itemConfig, ...config}, value: event.target.value};
        onChange(updatedData);
        setItem(updatedData);
    };
    
    
    const id = Math.random().toString(36).substring(2, 15);
    
    return (
        <>
            <div className="flex flex-column gap-2">
                <label htmlFor={id}>{item.label}</label>
                <InputText
                    value={item.value}
                    onChange={handleOnChange}
                    placeholder={item.placeholder}
                    className="w-full"
                    id={id}
                ></InputText>
            </div>
        </>
    );
};
const SettingsComponent: React.FC<FieldComponentProps> = ({config, onChange}) => {
    const [data, setData] = useState<TextInputConfig>({...itemConfig, ...config});
    
    const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const updatedData: TextInputConfig = {...data, [event.target.name]: event.target.value};
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
        validation: (item: TextInputConfig) => {
            console.log(item);
            return {};
        }
    }),
    settings: new ItemRenderer({
        render: SettingsComponent,
        validation: (item: TextInputConfig) => {
            console.log(item);
            return {};
        }
    }),
    heading: "Text input",
    description: "a simple box to insert a value into",
    hidden: false,
    icon: ()=> {
        return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M254 52.8C249.3 40.3 237.3 32 224 32s-25.3 8.3-30 20.8L57.8 416 32 416c-17.7 0-32 14.3-32 32s14.3 32 32 32l96 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-1.8 0 18-48 159.6 0 18 48-1.8 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l96 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-25.8 0L254 52.8zM279.8 304l-111.6 0L224 155.1 279.8 304z"/></svg>)},
    default_config: itemConfig
});