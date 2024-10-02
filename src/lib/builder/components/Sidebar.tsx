import items from "@/lib/items";
import {Config, FormType, Item, ItemType, onFormChangeType} from "@/lib/objects";
import {useDraggable} from "@dnd-kit/core";
import {nanoid} from "nanoid";
import {Accordion, AccordionTab} from "primereact/accordion";
import {TabPanel, TabView} from "primereact/tabview";
import {useRef, useState} from "react";

export function SidebarField({item}: {
    item: Item
}) {
    const IconComponent = item.icon;
    return <>
        <article className={"sidebar-field"}>
            <div className="item-panel-item flex p-2 w-100">
                <div className="item-icon mr-2">
                    <IconComponent/>
                </div>
                <div>
                    <div className="item-title">{item.heading}</div>
                    <div className="item-text">{item.description}</div>
                </div>
            </div>
        </article>
    </>;
}

function DraggableSidebarField({item}: {
    item: Item
}) {
    
    const id = useRef(nanoid());
    
    const {attributes, listeners, setNodeRef} = useDraggable({
        id: id.current,
        data: {
            item,
            fromSidebar: true,
        },
    });
    
    return (
        <div ref={setNodeRef} className="sidebar-field" {...attributes} {...listeners}>
            
            <SidebarField item={item}/>
        </div>
    );
}

export default function Sidebar({...props}: {
    form: FormType,
    onFormChange: onFormChangeType,
    activeItem?: ItemType,
    setActiveItem: (item: ItemType | undefined) => void,
    config: Config,
}) {
    const [panelIndex, setPanelIndex] = useState<number>(0);
    
    type paneltype = {
        label: string,
        items: Item[]
    }
    
    
    const items_list: { [key: string]: paneltype } = {};
    items.map((item) => {
        const k = item.group?.label || "";
        if (!Object.keys(items_list).includes(k)) {
            items_list[k] = {
                label: item.group?.label || "",
                items: []
            };
        }
        items_list[k]["items"].push(item);
    });
    
    const storePanelIndex = (index: number) => {
        setPanelIndex(index);
    };
    
    
    return (
        <>
            <TabView
                activeIndex={panelIndex}
                onTabChange={(e) => storePanelIndex(e.index)}
                className="sidebar"
            >
                <TabPanel header="Items">
                    {/* <IconField iconPosition="left"> */} {/*     <InputIcon className="pi pi-search"/> */} {/*     <InputText */} {/*         v-model="value1" */} {/*         placeholder="Search" */} {/*         className={"w-full my-3"} */} {/*     /> */} {/* </IconField> */}
                    
                    <Accordion activeIndex={0}>
                        {Object.keys(items_list).map((k) => {
                            return (
                                <AccordionTab header={items_list[k].label} key={k}>
                                    {items_list[k].items.map((item) => {
                                        return (<DraggableSidebarField key={`sidebar-${item.type}`} item={item}/>);
                                    })}
                                </AccordionTab>
                            );
                        })}
                    
                    </Accordion>
            
                </TabPanel>
                <TabPanel header="Forms">
                    forms {JSON.stringify(props.form)}
                </TabPanel>
                <TabPanel header="Variables">
                    list of variables this form can replace
                </TabPanel>
            </TabView>
        
        
        </>
    );
}