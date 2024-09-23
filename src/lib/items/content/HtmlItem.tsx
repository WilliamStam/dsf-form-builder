import {FieldComponentProps, Item, ItemRenderer, ItemType} from "@/lib/objects";
import {nanoid} from "nanoid";
import {Accordion, AccordionTab} from "primereact/accordion";
import {InputText} from "primereact/inputtext";
import {Editor} from "primereact/editor";
import React, {useEffect, useState} from "react";

export type HtmlConfig = ItemType & {
    label: string
    value: string
    placeholder: string
}

const itemConfig: HtmlConfig = {
    id: nanoid(),
    type: "content-html",
    label: "",
    value: "",
    placeholder: "",
};

const FormComponent: React.FC<FieldComponentProps> = ({config, onChange}) => {
    const [item, setItem] = useState<HtmlConfig>({...itemConfig, ...config});
    useEffect(() => {
        setItem({...itemConfig, ...config});
    }, [config]);
    
   
    
    const id = Math.random().toString(36).substring(2, 15);
    
    return (
        <>
            <div className="flex flex-column gap-2">
                <label htmlFor={id}>{item.label}</label>
                {<div dangerouslySetInnerHTML={{__html: item.value}}/>}
                
                {/* <Editor */}
                {/*     value={item.value} */}
                {/*     onChange={handleOnChange} */}
                {/*     placeholder={item.placeholder} */}
                {/*     className="w-full" */}
                {/*     id={id} */}
                {/* ></Editor> */}
            </div>
        </>
    );
};
const SettingsComponent: React.FC<FieldComponentProps> = ({config, onChange}) => {
    const [data, setData] = useState<HtmlConfig>({...itemConfig, ...config});
    
    const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const updatedData: HtmlConfig = {...data, [event.target.name]: event.target.value};
        setData(updatedData);
        onChange(updatedData);
    };
    const handleEditorOnChange = (v:string) => {
        const updatedData: HtmlConfig = {...data, value: v};
        setData(updatedData);
        onChange(updatedData);
    };
    
    
    useEffect(() => {
        setData({...itemConfig, ...config});
    }, [config]);
    
    
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
                        <Editor
                            value={data.value}
                            name={"value"}
                            onTextChange={(e) => handleEditorOnChange(e.htmlValue ?? "")}
                            style={{minHeight:"300px"}}
                            
                        ></Editor>
                </div>
            </AccordionTab>
            
            </Accordion>
        
        </>
    );
};

export default new Item({
    type: itemConfig.type,
    form: new ItemRenderer({
        render: FormComponent,
        validation: (item: HtmlConfig) => {
            console.log(item);
            return {};
        }
    }),
    settings: new ItemRenderer({
        render: SettingsComponent,
        validation: (item: HtmlConfig) => {
            console.log(item);
            return {};
        }
    }),
    heading: "HTML Content",
    description: "WYSIWYG editor for adding in content to the form",
    hidden: false,
    icon: ()=> {
        return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
            <path d="M392.8 1.2c-17-4.9-34.7 5-39.6 22l-128 448c-4.9 17 5 34.7 22 39.6s34.7-5 39.6-22l128-448c4.9-17-5-34.7-22-39.6zm80.6 120.1c-12.5 12.5-12.5 32.8 0 45.3L562.7 256l-89.4 89.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l112-112c12.5-12.5 12.5-32.8 0-45.3l-112-112c-12.5-12.5-32.8-12.5-45.3 0zm-306.7 0c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3l112 112c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256l89.4-89.4c12.5-12.5 12.5-32.8 0-45.3z"/></svg>)
    },
    default_config: itemConfig
});