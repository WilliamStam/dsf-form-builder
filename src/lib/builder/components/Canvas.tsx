import {Item} from "@/lib/item";

import {itemConfig as FormItemConfig} from "@/lib/items/special/form/config";
import {FormType, ItemType} from "@/lib/objects";
import {useFormStore} from "@/lib/stores";
import {clone_object} from "@/lib/utilities.ts";
import {useDroppable} from "@dnd-kit/core";
import {useSortable} from "@dnd-kit/sortable";
import {CSS} from "@dnd-kit/utilities";
import {Button} from "primereact/button";
import {ButtonGroup} from "primereact/buttongroup";

import {confirmDialog} from "primereact/confirmdialog";
import {useEffect, useState} from "react";


export function SortableItem({id, item, active, setActive, onItemChange, onItemRemove}: {
    id: string,
    item: ItemType,
    active?: ItemType,
    setActive: (item: ItemType | undefined) => void,
    onItemChange: (item: ItemType) => void
    onItemRemove: (id: string) => void
}) {
    
    const {attributes, listeners, setNodeRef, setActivatorNodeRef, transform, transition} =
        useSortable({
            id,
            data: {
                id,
                item: item,
            },
            
        });
    
    const style = {
        transform: CSS.Transform.toString(transform),
        transition,
    };
    
    let className = "sortable-item";
    if (item.id == active?.id) {
        className = className + " active";
    }
    
    const mask_block: boolean = [FormItemConfig.type].includes(item.type);
    
    const confirm = () => {
        confirmDialog({
            message: "Are you sure you want to remove this item?",
            header: "Confirmation",
            icon: "pi pi-exclamation-triangle",
            accept: () => onItemRemove(id),
            // reject: () => rejectFunc()
        });
    };
    let editBtn = <Button size="small" outlined label="Edit" icon="pi pi-pencil" onClick={() => setActive(item)}/>;
    if (active && active.id == item.id) {
        editBtn = <Button size="small" outlined label="Done" icon="pi pi-pencil" onClick={() => setActive(undefined)}/>;
    }
    
    return (
        <>
            <div ref={setNodeRef} style={style} {...attributes} className={className}>
                
                <Item item={item} onChange={onItemChange}/> {} {mask_block ? (
                <div className="mask"></div>
            ) : null}
                
                
                <div className="flex flex-row align-items-center item-footer">
                    <div className="flex-grow-1 item-type"> {item.type}</div>
                    
                    <ButtonGroup> <Button {...listeners} // @ts-ignore
                        ref={setActivatorNodeRef}
                        size="small"
                        outlined
                        label="Order"
                        icon="pi pi-sort"
                    />
                        
                        {editBtn}
                        
                        <Button size="small" outlined label="Remove" icon="pi pi-trash" onClick={confirm}/>
                    </ButtonGroup>
                </div>
            
            
            </div>
        </>
    );
}

let loadcount = 0;
export default function Canvas({activeItem, setActiveItem}: {
    activeItem?: ItemType,
    setActiveItem: (item: ItemType | undefined) => void,
}) {
    console.log("    ************** Canvas", loadcount++, "**************");
    const {form, setForm} = useFormStore();
    const [items, setItems] = useState<ItemType[]>(form.items ?? []);
    
    
    useEffect(() => useFormStore.subscribe((state) => {
        setItems(clone_object(state.form.items));
        console.log("Canvas useFormStore useEffect form change");
    }));
    
    
    const handleItemRemove = (item_id: string) => {
        console.log("handleItemRemove", item_id);
        const new_form = clone_object(form);
        new_form.items = new_form.items.filter(it =>
            it.id != item_id
        );
        setForm(new_form);
        setItems(new_form.items);
        if (activeItem && activeItem.id == item_id) {
            setActiveItem(undefined);
        }
    };
    
    const handleItemChange = (value: ItemType) => {
        console.log("handleItemChange", value);
        const new_form = clone_object<FormType>(form);
        
        new_form.items = items.map((item: ItemType) => {
            if (item.id == value.id) {
                return value;
            }
            return item;
        });
        setForm(new_form);
        setItems(new_form.items);
        
    };
    
    // @ts-ignore
    const {listeners, setNodeRef, transform, transition} = useDroppable({
        id: "canvas_droppable",
        data: {
            parent: null,
            isContainer: true,
        },
    });
    
    const style = {
        transform: CSS.Transform.toString(transform),
        transition,
    };
    
    return (<>
            {/* <div>config: {JSON.stringify(config.external_select_options)}</div> */}
            
            <div ref={setNodeRef} className="canvas form-area" style={style} {...listeners}>
            <h1>{form.label}</h1>
                {items?.map((item) => (
                    <SortableItem
                        key={item.id}
                        id={item.id}
                        item={item}
                        active={activeItem}
                        setActive={setActiveItem}
                        onItemChange={handleItemChange}
                        onItemRemove={handleItemRemove}
                    />
                ))}
        </div>
        </>
    );
}