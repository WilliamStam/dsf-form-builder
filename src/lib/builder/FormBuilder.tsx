import Canvas from "@/lib/builder/components/Canvas.tsx";
import Properties from "@/lib/builder/components/Properties.tsx";
import Sidebar, {SidebarField} from "@/lib/builder/components/Sidebar.tsx";
import {Item} from "@/lib/item";
import {Config, ItemType} from "@/lib/objects";
import {formState, FormType} from "@/lib/objects/forms.ts";
import {
    Active,
    closestCenter,
    DndContext,
    DragEndEvent,
    DragOverEvent,
    DragOverlay,
    DragStartEvent,
    KeyboardSensor,
    Over,
    PointerSensor,
    useSensor,
    useSensors
} from "@dnd-kit/core";
import {arrayMove, rectSwappingStrategy, SortableContext, sortableKeyboardCoordinates,} from "@dnd-kit/sortable";
import {nanoid} from "nanoid";
import {ConfirmDialog} from "primereact/confirmdialog";
import {useEffect, useState} from "react";
import "@/lib/styles/styles.scss";


// import style from "./style.css";

function getData(prop: Active | Over | null) {
    return prop?.data?.current ?? {};
}

let formloadcount = 0;

export const FormBuilder = ({...props}: {
    form: FormType,
    onChange: (form: FormType) => void,
    config: Config
}) => {
    formloadcount = formloadcount + 1;
    console.log("******************", formloadcount, "******************");
    // this creates a new object on setForm so it should
    const {form, setForm} = formState(props.form);
    const [activeItem, setActiveItem] = useState<ItemType | undefined>(undefined);
    useEffect(() => {
        if (props.form ) {
            console.log("useEffect", "props.form", props.form);
            setForm(props.form);
        }
    }, [props.form]);
    //
    useEffect(() => {
        if (form ) {
            console.log("useEffect", "form", form);
            props.onChange(form);
        }
    }, [form]);
    // ----------- DND --------------
    const sensors = useSensors(
        useSensor(PointerSensor),
        useSensor(KeyboardSensor, {
            coordinateGetter: sortableKeyboardCoordinates,
        })
    );
    
    const [activeSidebarField, setActiveSidebarField] = useState(); // only for fields from the sidebar
    const [activeField, setActiveField] = useState(); // only for fields that are in the form.
    
    const cleanUp = () => {
        console.log("cleanUp");
        setActiveSidebarField(undefined);
        setActiveField(undefined);
    };
    
    const handleDragStart = (e: DragStartEvent) => {
        const {active} = e;
        const activeData = getData(active);
        console.log("handleDragStart");
        const {item} = activeData;
        if (activeData.fromSidebar) {
            const new_item = item.data;
            new_item.id = nanoid();
            item.id = new_item.id;
            console.log("FormBuilder", "handleDragStart", "setActiveSidebarField", item, "setActiveItem", new_item);
            setActiveSidebarField(item);
            setActiveItem(new_item);
        } else {
            console.log("FormBuilder", "handleDragStart", "setActiveField", activeData.item);
            setActiveField(activeData.item);
        }
        
    };
    
    
    const handleDragOver = (e: DragOverEvent) => {
        const {active, over} = e;
        const activeData = getData(active);
        const overData = getData(over);
        console.log("handleDragOver");
        
        if (activeData.fromSidebar) {
            
            console.log("handleDragOver", "fromSidebar", activeData, overData);
            
            if (form.items.findIndex((item) => item.id === activeData.item.id) == -1) {
                
                form.items.push(activeData.item.data);
                const itemIndex = form.items.findIndex((item) => item.id === activeData.item.id);
                const overIndex = form.items.findIndex((item) => item.id === overData.id);
                console.log("handleDragOver", "new item", activeData.item.data, itemIndex, overData, overIndex);
                if (overIndex != -1 && overIndex != itemIndex) {
                    form.items = arrayMove(form.items, itemIndex, overIndex);
                }
                setForm(form);
            } else if (!over) {
                console.log("handleDragOver", "!over", overData);
                form.items = form.items.filter((f) => f.id !== activeData.item.id);
                setForm(form);
            } else {
                console.log("handleDragOver", "else", overData);
                const itemIndex = form.items.findIndex((item) => item.id === activeData.item.id);
                const overIndex = form.items.findIndex((item) => item.id === overData.id);
                console.log("arrayMove", form.items, itemIndex, overIndex, overData, activeData);
                form.items = arrayMove(form.items, itemIndex, overIndex);
                setForm(form);
                console.log("SET FORM NOW ", form.items, form.items.map((f) => f.id));
            }
            
            
        } else {
            const itemIndex = form.items.findIndex((item) => item.id === activeData.item.id);
            const overIndex = form.items.findIndex((item) => item.id === overData.id);
            if (itemIndex != overIndex) {
                // new_form.config = arrayMove(new_form.config, itemIndex, overIndex)
                // console.log("normal sorting", itemIndex, overIndex)
                // setForm(new_form)
            }
            
        }
        
        
    };
    
    const handleDragEnd = (e: DragEndEvent) => {
        const {active, over} = e;
        
        const activeData = getData(active);
        const overData = getData(over);
        console.log("handleDragEnd", activeData, overData);
        
        
        console.log("handleDragEnd", form.items);
        const itemIndex = form.items.findIndex((item) => item.id === activeData.item.id);
        const overIndex = form.items.findIndex((item) => item.id === overData.id);
        if (itemIndex != overIndex) {
            form.items = arrayMove(form.items, itemIndex, overIndex);
            setForm(form);
        }
        // put the "new" config option to the active
        // if (activeData.fromSidebar) {
        //     setActiveItem(activeData.item.data);
        // } else {
        //     setActiveItem(activeData.item);
        // }
        console.log("handleDragEnd", activeData, overData);
        
        cleanUp();
    };
    
    
    let propertiesClassName = "properties-area px-1";
    if (activeItem) {
        propertiesClassName = propertiesClassName + " active";
    }
    
    
    const form_args = {
        form: form,
        onFormChange: setForm,
        activeItem: activeItem,
        setActiveItem: setActiveItem,
        config: props.config
    };
    
    
    if (form) {
        return (
            <>
                
                <div className="form-builder">
                    <DndContext
                        sensors={sensors}
                        onDragStart={handleDragStart}
                        onDragOver={handleDragOver}
                        onDragEnd={handleDragEnd}
                        collisionDetection={closestCenter}
                        autoScroll
                    >
                        <div className="sidebar-area">
                            <Sidebar{...form_args}></Sidebar>
                        </div>
                        <div className="canvas-area">
                            <SortableContext
                                strategy={rectSwappingStrategy}
                                items={form.items.map((f) => f.id)}
                            >
                                <Canvas {...form_args}/>
                            </SortableContext>
                        </div>
                        <div className="properties-area">
                           <Properties {...form_args}></Properties>
                        </div>
                    
                        <DragOverlay dropAnimation={null}>
                            {activeSidebarField ? (
                                <SidebarField item={activeSidebarField}/>
                            ) : null} {activeField ? <Item
                            item={activeField}
                            onChange={() => {
                        }} config={props.config} form={props.form}
                        /> : null}
                        </DragOverlay>
                    </DndContext>
                </div>
                <ConfirmDialog/>
               
            </>
        );
    }
    return (
        <>
        <div>No form config loaded</div>
        </>
    );
    
};