import Canvas from "@/lib/builder/components/Canvas.tsx";
import Properties from "@/lib/builder/components/Properties.tsx";
import Sidebar, {SidebarField} from "@/lib/builder/components/Sidebar.tsx";
import {ItemRender} from "@/lib/item";
import {ItemType} from "@/lib/objects";
import {ConfirmDialog} from "primereact/confirmdialog";
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
import {useEffect, useState} from "react";
import "./styles/builder.scss";
// import "primereact/resources/themes/lara-dark-cyan/theme.css";
// import style from "./style.css";

function getData(prop: Active | Over | null) {
    return prop?.data?.current ?? {};
}

let formloadcount = 0;

export const FormBuilder = ({...props}: {
    form?: FormType,
    onChange: (form: FormType) => void,
}) => {
    formloadcount = formloadcount + 1;
    console.log("******************", formloadcount, "******************");
    // this creates a new object on setForm so it should
    const {form, setForm} = formState(props.form);
    const [activeItem, setActiveItem] = useState<ItemType | undefined>(undefined);
    
    useEffect(() => {
        if (props.form) {
            setForm(props.form);
        }
    }, [props.form]);
    
    useEffect(() => {
        if (form) {
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
        setActiveSidebarField(undefined);
        setActiveField(undefined);
    };
    
    const handleDragStart = (e: DragStartEvent) => {
        const {active} = e;
        const activeData = getData(active);
        
        const {item} = activeData;
        if (activeData.fromSidebar) {
            
            const new_item = item.config;
            new_item.id = nanoid();
            item.id = new_item.id
            setActiveSidebarField(item);
            setActiveItem(new_item);
        } else {
            setActiveField(activeData.item);
        }
        
    };
    
    
    const handleDragOver = (e: DragOverEvent) => {
        const {active, over} = e;
        console.log("over", over);
        const activeData = getData(active);
        const overData = getData(over);
        
        if (activeData.fromSidebar) {
            
            console.log("handleDragOver", "fromSidebar", activeData.item.id);
            if (form.config.findIndex((item) => item.id === activeData.item.id) == -1) {
                console.log("handleDragOver", "new item", activeData.item.config, overData);
                form.config.push(activeData.item.config);
                const itemIndex = form.config.findIndex((item) => item.id === activeData.item.id);
                const overIndex = form.config.findIndex((item) => item.id === overData.id);
                form.config = arrayMove(form.config, itemIndex, overIndex);
                setForm(form);
            } else if (!over) {
                console.log("handleDragOver", "!over", overData);
                form.config = form.config.filter((f) => f.id !== activeData.item.id);
                setForm(form);
            } else {
                console.log("handleDragOver", "else", overData);
                const itemIndex = form.config.findIndex((item) => item.id === activeData.item.id);
                const overIndex = form.config.findIndex((item) => item.id === overData.id);
                console.log("arrayMove", form.config, itemIndex, overIndex, overData, activeData);
                form.config = arrayMove(form.config, itemIndex, overIndex);
                setForm(form);
                console.log("SET FORM NOW ", form.config, form.config.map((f) => f.id));
            }
            
            
        } else {
            const itemIndex = form.config.findIndex((item) => item.id === activeData.item.id);
            const overIndex = form.config.findIndex((item) => item.id === overData.id);
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
        
        
        console.log("handleDragEnd", form.config);
        const itemIndex = form.config.findIndex((item) => item.id === activeData.item.id);
        const overIndex = form.config.findIndex((item) => item.id === overData.id);
        if (itemIndex != overIndex) {
            form.config = arrayMove(form.config, itemIndex, overIndex);
            console.log("handleDragEnd normal sorting", itemIndex, overIndex);
            setForm(form);
        }
        setActiveItem(activeData.item);
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
        setActiveItem: setActiveItem
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
                                items={form.config.map((f) => f.id)}
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
                            ) : null} {activeField ? <ItemRender
                            item={activeField} onChange={() => {
                        }}
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