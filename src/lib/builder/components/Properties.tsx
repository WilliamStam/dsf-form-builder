import items from "@/lib/items";
import {Settings} from "@/lib/item";
import {Config, onFormChangeType} from "@/lib/objects";
import {FormType, ItemType, } from "@/lib/objects";
import {clone_object} from "@/lib/utilities.ts";
import {Accordion, AccordionTab} from "primereact/accordion";
import {Button} from "primereact/button";
import {InputText} from "primereact/inputtext";
import React, {useEffect, useState} from "react";

export default function Properties({...props}: {
    form: FormType,
    onFormChange: onFormChangeType,
    activeItem?: ItemType,
    setActiveItem: (item: ItemType | undefined) => void,
    config: Config
    
}) {
    console.log("Properties");
    const [editing_form, setEditingForm] = useState(props.form);
    const [editing_item, setEditingItem] = useState(props.activeItem);
    
    const handleFormItemChange = (value: ItemType) => {
        console.log("Properties","handleFormItemChange", value);
        //
        setEditingItem(value);
        // //
        const new_form = clone_object(editing_form);
        new_form.items = new_form.items.map((it) => {
            if (it.id == value.id) {
                return value;
            }
            return it;
        });
        props.onFormChange(new_form);
    };
    const handleOnFormChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const updatedData: FormType = {...editing_form, [event.target.name]: event.target.value};
        setEditingForm(updatedData);
        props.onFormChange(updatedData);
    };
    
    const handleCancel = () => {
        props.setActiveItem(undefined);
    };
    
    console.log("Properties","activeItem", editing_item);
    
    useEffect(() => {
        console.log("useEffect","setEditingItem", props.activeItem)
        setEditingItem(props.activeItem);
    }, [props.activeItem]);
    
    useEffect(() => {
        console.log("useEffect", "setEditingForm", props.form)
        setEditingForm(props.form);
    }, [props.form]);
    
    
    // useEffect(() => {
    //     const new_form = clone_object(form)
    //     new_form.config = new_form.config.map((it: ItemType) => {
    //         if (item.id == it.id) {
    //             return item
    //         }
    //         return it
    //     })
    //     // onFormChange(new_form)
    // }, [item]);
    
    
    
    
    if (editing_item) {
        const item = items.getByItem(editing_item);
        
        if (item){
            const IconComponent = item.icon
            return (
                <>
                    <div className="properties active">
                    
                   
                    <div className="item-panel-item flex align-items-center">
                        <div className="flex-grow-1 flex align-items-center">
                            <div className="item-icon mr-2">
                            <IconComponent/>
                        </div>
                        <div>
                            <h2>{item.heading}</h2>
                        </div>
                        </div>
                        
                         <Button onClick={handleCancel} size="small" outlined={true} icon="pi pi-times"/>
                    </div>
                    
                    <Settings item={editing_item} onChange={handleFormItemChange} config={props.config}></Settings>
                    
                    {/* <Button onClick={handleCancel} size="small" className={"w-full"}>Done</Button> */}
                    </div>
                </>
            );
        }
        return React.createElement(
            () => <div>The component {editing_item.type} was not found.</div>,
        );
        
    } else {
        return (
            <>
                <div className="properties">
                    <div className="item-panel-item flex px-3">
                        <div>
                            <h2>Form Settings</h2>
                        </div>
                    </div>
                    <Accordion activeIndex={0}>
                        <AccordionTab header="General" key="general">
                            <div className="form-item flex flex-column gap-4">
                                <div className="flex flex-column gap-2">
                                    <label htmlFor="label">Form label</label>
                                    <InputText
                                        onChange={handleOnFormChange}
                                        name={"label"}
                                        value={editing_form.label ?? ""}
                                        className={"w-full"}
                                    />
                                </div>
                            </div>
                        </AccordionTab>
                    </Accordion>
                </div>
            </>
        ); }
                
                
                }