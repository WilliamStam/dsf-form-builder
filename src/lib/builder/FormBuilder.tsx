import Canvas from "@/lib/builder/components/Canvas.tsx";
import Properties from "@/lib/builder/components/Properties.tsx";
import Sidebar, {SidebarField} from "@/lib/builder/components/Sidebar.tsx";
import {ItemRender} from "@/lib/item";
import {ItemType} from "@/lib/objects";
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
import "primereact/resources/themes/lara-light-cyan/theme.css";
// import "primereact/resources/themes/lara-dark-cyan/theme.css";
import "primereact/resources/primereact.min.css"; //core css
import "primeicons/primeicons.css"; //icons
import "primeflex/primeflex.css";


function getData(prop: Active | Over | null) {
    return prop?.data?.current ?? {};
}

let formloadcount = 0;

export const FormBuilder = ({config, onChange}: {
    config?: FormType,
    onChange: (form: FormType) => void,
}) => {
    formloadcount = formloadcount + 1;
    console.log("******************", formloadcount, "******************");
    // this creates a new object on setForm so it should
    const {form, setForm} = formState(config);
    const [activeItem, setActiveItem] = useState<ItemType | undefined>(undefined);
    
    useEffect(() => {
        if (config) {
            setForm(config);
        }
    }, [config]);
    
    useEffect(() => {
        if (form) {
            onChange(form);
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
        
        console.log("handleDragStart", activeData);
        const {item} = activeData;
        if (activeData.fromSidebar) {
            
            const new_item = item.default_config;
            new_item.id = nanoid();
            item.id = new_item.id;
            console.log("handleDragStart", "sidebar", item, new_item);
            console.log(new_item);
            setActiveSidebarField(item);
            setActiveItem(activeData.item);
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
                console.log("handleDragOver", "new item", activeData.item.default_config, overData);
                form.config.push(activeData.item.default_config);
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
    
    // const handlerOnActiveItem = (item: ItemType | undefined) => {
    //     // console.log("aaaa",item)
    //     // if (item?.id == activeItem?.id){
    //     //     setActiveItem(null)
    //     // } else {
    //     setActiveItem(item);
    //     // }
    //
    // };
    //
    
    const form_args = {
        form: form,
        onFormChange: setForm,
        activeItem: activeItem,
        setActiveItem: setActiveItem
    };
    
    console.log(setForm);
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
               
            </>
        );
    }
    return (
        <>
        <div>No form config loaded</div>
        </>
    );
    
};