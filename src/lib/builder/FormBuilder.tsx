import Canvas from "@/lib/builder/components/Canvas.tsx";
import Properties from "@/lib/builder/components/Properties.tsx";
import Sidebar from "@/lib/builder/components/Sidebar.tsx";
import {DragWrapper} from "@/lib/builder/DragWrapper.tsx";
import {Config, ItemType} from "@/lib/objects";
import {FormType} from "@/lib/objects/forms.ts";
import {FormStoreContext, useConfigStore, useFormStore} from "@/lib/stores";
import {clone_object} from "@/lib/utilities.ts";
import {rectSwappingStrategy, SortableContext,} from "@dnd-kit/sortable";
import {ConfirmDialog} from "primereact/confirmdialog";
import {useEffect, useState} from "react";
import "@/lib/styles/styles.scss";


// import style from "./style.css";


let loadcount = 0;

export const FormBuilder = ({...props}: {
    form: FormType,
    onChange: (form: FormType) => void,
    config: Config
}) => {
    console.log("****************** FormBuilder", loadcount++, "******************");
    
    const [activeItem, setActiveItem] = useState<ItemType | undefined>(undefined);
    // setForm(props.form)
    const {form, setForm} = useFormStore();
    const setConfig = useConfigStore((state) => state.setConfig);
    
    useEffect(() => {
        setForm(props.form);
    }, [props.form]);
    
    useEffect(() => {
        setConfig(props.config);
    }, [props.config]);
    // console.log(form)
    
    // useEffect(() => useFormStore.subscribe((state) => {
    //     props.onChange(clone_object(state.form));
    // }));
    
    return (<>
        <FormStoreContext.Provider initialValue={props.form}>
        <div className="form-builder">
            
            <DragWrapper
                setActiveItem={setActiveItem}
                activeItem={activeItem}
            >
                 <div className="sidebar-area">
                    <Sidebar
                        setActiveItem={setActiveItem}
                        activeItem={activeItem}
                    />
                </div>
                <div className="canvas-area">
                    <SortableContext
                        strategy={rectSwappingStrategy}
                        items={form.items.map((f) => f.id)}
                    >
                        <Canvas
                            setActiveItem={setActiveItem}
                            activeItem={activeItem}
                        />
                    </SortableContext>
                </div>
                 <div className="properties-area">
                   <Properties
                       setActiveItem={setActiveItem}
                       activeItem={activeItem}
                   />
                </div>
            </DragWrapper>
        </div>
        <ConfirmDialog/>
        </FormStoreContext.Provider>
    </>
    );

};