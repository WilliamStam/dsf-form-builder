import {FieldComponentProps} from "@/lib/objects";
import {clone_object} from "@/lib/utilities.ts";

import {
    closestCenter,
    DndContext,
    DragEndEvent,
    KeyboardSensor,
    PointerSensor,
    useSensor,
    useSensors,
} from "@dnd-kit/core";
import {
    arrayMove,
    SortableContext,
    sortableKeyboardCoordinates,
    useSortable,
    verticalListSortingStrategy
} from "@dnd-kit/sortable";
import {CSS} from "@dnd-kit/utilities";
import {Accordion, AccordionTab} from "primereact/accordion";
import {Button} from "primereact/button";
import {InputText} from "primereact/inputtext";
import {RadioButton, RadioButtonChangeEvent} from "primereact/radiobutton";
import React, {useEffect, useState} from "react";
import {itemConfig, ItemConfigType, OptionType} from "./config.ts";


const SettingsEditOptionItem = ({option, onChange, index}: {
    option: OptionType,
    onChange: (option: OptionType | null) => void,
    index: string,
}) => {
    const [data, setData] = useState<OptionType>(option);
    
    const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const updatedData: OptionType = {
            ...{value: data.value, label: data.label},
            [event.target.name]: event.target.value
        };
        setData(updatedData);
        onChange(updatedData);
    };
    useEffect(() => {
        setData(option);
    }, [option]);
    
    
    const {
        attributes,
        listeners,
        setNodeRef,
        setActivatorNodeRef,
        transform,
    } = useSortable({id: index});
    
    const style = {
        transform: CSS.Transform.toString(transform),
        // transition,
    };
    
    
    return (
        <>
            <div className="flex flex-row gap-2" ref={setNodeRef} style={style} {...attributes} >
                <Button
                    icon="pi pi-sort"
                    className="px-0 border-noround border-0"
                    style={{width: "1rem", color: "#E1E1E1", background: "transparent"}}
                    severity="secondary"
                    size="small"
                    ref={setActivatorNodeRef as (element: Button | null) => void}
                    {...listeners}
                />
                
                <div className="p-inputgroup flex-1">
                    
                    <InputText
                        id={"value"}
                        value={data.value}
                        name={"value"}
                        onChange={handleOnChange}
                        className="flex-1"
                        placeholder="Value"
                    />
                    <InputText
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
    onInsert: (option: OptionType) => void
}) => {
    const empty_data: OptionType = {
        value: "",
        label: ""
    };
    const [data, setData] = useState<OptionType>(empty_data);
    
    const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const updatedData: OptionType = {
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
                    />
                    <InputText
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

const CustomSelectOptions: React.FC<FieldComponentProps<ItemConfigType>> = ({item, onChange, form, config}) => {
    const [data, setData] = useState<ItemConfigType>({...itemConfig, ...item});
    
    const handleOptionsOnChange = (option: OptionType | null, index: number) => {
        const new_options = clone_object(data.options);
        if (option) {
            new_options[index] = option;
        } else {
            new_options.splice(index, 1);
        }
        const new_data = {...data, options: new_options};
        setData(new_data);
        onChange(new_data);
    };
    
    const addNewOption = (option: OptionType) => {
        const new_options = clone_object(data.options);
        new_options.push(option);
        const new_data = {...data, options: new_options};
        setData(new_data);
        onChange(new_data);
    };
    
    const sensors = useSensors(
        useSensor(PointerSensor),
        useSensor(KeyboardSensor, {
            coordinateGetter: sortableKeyboardCoordinates,
        })
    );
    
    function handleDragEnd(event: DragEndEvent) {
        const {active, over} = event;
        
        if (over && active.id !== over.id) {
            function get_index_value(k: string): number {
                return parseInt(k.replace("option-", ""));
            }
            
            const new_options = arrayMove(data.options, get_index_value(over.id.toString()), get_index_value(active.id.toString()));
            const new_data = {...data, options: new_options};
            setData(new_data);
            onChange(new_data);
        }
    }
    
    return (
        <>
            <div className="form-item flex flex-column gap-4">
                        <DndContext
                            sensors={sensors}
                            collisionDetection={closestCenter}
                            onDragEnd={handleDragEnd}
                        
                        >
                          <SortableContext
                              items={data.options.map((item, index) => `option-${index}`)}
                              strategy={verticalListSortingStrategy}
                          >
                            {data.options.map((item, index) => {
                                return (<SettingsEditOptionItem
                                    key={`option-${index}`}
                                    option={item}
                                    index={`option-${index}`}
                                    onChange={(option) => {
                                        handleOptionsOnChange(option, index);
                                    }}
                                />);
                            })}
                          </SortableContext>
                          
                        </DndContext>
                        <SettingsAddOptionItem
                            key={`item-new`} onInsert={addNewOption}
                        />
            </div>
                    
        </>
    );
};


const SettingsComponent: React.FC<FieldComponentProps> = ({item, onChange, form, config}) => {
    const [data, setData] = useState<ItemConfigType>({...itemConfig, ...item});
    
    const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>| RadioButtonChangeEvent) => {
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
                <AccordionTab header="Options" key="options">
                    {config.external_select_options.map((option) => {
                        return (
                            <div key={option.key} className="flex align-items-center">
                                <RadioButton
                                    inputId={option.key}
                                    name="source"
                                    value={option.key}
                                    onChange={handleOnChange}
                                    checked={data.source === option.key}
                                />
                                <label htmlFor={option.key} className="ml-2">{option.label}</label>
                            </div>
                        );
                    })}
                    <div key="local" className="flex align-items-center">
                        <RadioButton
                            inputId="local"
                            name="source"
                            value="local"
                            onChange={handleOnChange}
                            checked={data.source === "local"}
                        />
                        <label htmlFor="local" className="ml-2">Custom</label>
                    </div>
                    
                   
                    <div className="mt-4">
                    {data.source === "local" && <CustomSelectOptions item={data} onChange={onChange} config={config} form={form}/>}
                    </div>
                </AccordionTab>
                
            
            </Accordion>
            
            
            {/* <div>{JSON.stringify(config)}</div> */}
        </>
    );
};
export default SettingsComponent;

export const SettingsValidation = (item: ItemConfigType) => {
    console.log("Validation", item);
    return {};
};