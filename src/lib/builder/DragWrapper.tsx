import {ItemType} from "@/lib";
import {SidebarField} from "@/lib/builder/components/Sidebar.tsx";
import {Item} from "@/lib/item";
import {useFormStore} from "@/lib/stores";
import {clone_object} from "@/lib/utilities.ts";
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
import {arrayMove, sortableKeyboardCoordinates,} from "@dnd-kit/sortable";
import {nanoid} from "nanoid";
import {ReactNode, useState} from "react";
import "@/lib/styles/styles.scss";

// import style from "./style.css";

function getData(prop: Active | Over | null) {
    return prop?.data?.current ?? {};
}

let loadcount = 0;

export const DragWrapper = ({children, activeItem, setActiveItem}: {
    children: ReactNode,
    activeItem?: ItemType,
    setActiveItem: (item: ItemType | undefined) => void,
}) => {
    console.log("  **************** DragWrapper", loadcount++, "****************");
    const {form, setForm} = useFormStore();
    // const {config, setConfig} = useConfigStore();
    
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
        console.log("handleDragStart", e);
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
        console.log("handleDragOver", e);
        const new_form = clone_object(form);
        if (activeData.fromSidebar) {
            
            console.log("handleDragOver", "fromSidebar", activeData, overData);
            
            if (new_form.items.findIndex((item) => item.id === activeData.item.id) == -1) {
                
                new_form.items.push(activeData.item.data);
                const itemIndex = new_form.items.findIndex((item) => item.id === activeData.item.id);
                const overIndex = new_form.items.findIndex((item) => item.id === overData.id);
                console.log("handleDragOver", "new item", activeData.item.data, itemIndex, overData, overIndex);
                if (overIndex != -1 && overIndex != itemIndex) {
                    new_form.items = arrayMove(new_form.items, itemIndex, overIndex);
                }
                setForm(new_form);
            } else if (!over) {
                console.log("handleDragOver", "!over", overData);
                new_form.items = new_form.items.filter((f) => f.id !== activeData.item.id);
                setForm(new_form);
            } else {
                console.log("handleDragOver", "else", overData);
                const itemIndex = new_form.items.findIndex((item) => item.id === activeData.item.id);
                const overIndex = new_form.items.findIndex((item) => item.id === overData.id);
                console.log("arrayMove", form.items, itemIndex, overIndex, overData, activeData);
                form.items = arrayMove(new_form.items, itemIndex, overIndex);
                setForm(new_form);
                console.log("SET FORM NOW ", form.items, form.items.map((f) => f.id));
            }
            
            
        } else {
            const itemIndex = new_form.items.findIndex((item) => item.id === activeData.item.id);
            const overIndex = new_form.items.findIndex((item) => item.id === overData.id);
            if (itemIndex != overIndex) {
                // new_form.config = arrayMove(new_form.config, itemIndex, overIndex)
                // console.log("normal sorting", itemIndex, overIndex)
                // setForm(new_form)
            }
            
        }
        
        
    };
    
    const handleDragEnd = (e: DragEndEvent) => {
        const {active, over} = e;
        const new_form = clone_object(form);
        
        const activeData = getData(active);
        const overData = getData(over);
        console.log("handleDragEnd", e);
        
        console.log("handleDragEnd", new_form.items);
        const itemIndex = new_form.items.findIndex((item) => item.id === activeData.item.id);
        const overIndex = new_form.items.findIndex((item) => item.id === overData.id);
        if (itemIndex != overIndex) {
            new_form.items = arrayMove(form.items, itemIndex, overIndex);
            
        }
        console.log("handleDragEnd", new_form.items);
        setForm(new_form);
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
    
    
    if (form) {
        return (
            <>
                
                    <DndContext
                        sensors={sensors}
                        onDragStart={handleDragStart}
                        onDragOver={handleDragOver}
                        onDragEnd={handleDragEnd}
                        collisionDetection={closestCenter}
                        autoScroll
                    >
                       {children}
                        
                        <DragOverlay dropAnimation={null}>
                            {activeSidebarField ? (
                                <SidebarField item={activeSidebarField}/>
                            ) : null} {activeField ? <Item
                            item={activeField}
                            onChange={() => {
                            }
                            }
                        /> : null}
                        </DragOverlay>
                    </DndContext>
                
                
            </>
        );
    }
    return (
        <>
        <div>No form config loaded</div>
        </>
    );
    
};