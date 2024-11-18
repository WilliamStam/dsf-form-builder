import Canvas from "@/lib/builder/components/Canvas.tsx";
import Properties from "@/lib/builder/components/Properties.tsx";
import Sidebar from "@/lib/builder/components/Sidebar.tsx";
import {DragWrapper} from "@/lib/builder/DragWrapper.tsx";
import {ConfigType, ItemType} from "@/lib/objects";
import {FormType} from "@/lib/objects/forms.ts";
import {ConfigStoreContext, FormStoreContext, useConfigStore, useFormStore} from "@/lib/stores";
import {getFormStore} from "@/lib/stores/formStore.tsx";
import {clone_object} from "@/lib/utilities.ts";
import {rectSwappingStrategy, SortableContext,} from "@dnd-kit/sortable";
import {diff} from "deep-object-diff";
import {ConfirmDialog} from "primereact/confirmdialog";
import React, {useEffect, useState} from "react";
import "@/lib/styles/styles.scss";

// import style from "./style.css";
let formloadcount = 0;

export const FormBuilder = ({...props}: {
    form: FormType,
    onChange: (value: FormType) => void,
    config: ConfigType
}) => {
    console.log("   ****************** FormBuilder", formloadcount++, "******************");
    
    return (<>
        <ConfigStoreContext.Provider initialValue={props.config}>
        <FormStoreContext.Provider initialValue={props.form}>
            <Builder {...props} />
        </FormStoreContext.Provider>
        </ConfigStoreContext.Provider>
    </>);
    
    
};

let loadcount = 0;
export const Builder = ({...props}: {
    form: FormType,
    onChange: (form: FormType) => void,
    config: ConfigType
}) => {
    console.log("   ****************** Builder", loadcount++, "******************");
    const {form, setForm} = useFormStore();
    const {config, setConfig} = useConfigStore();
    
    useEffect(() => {
        console.log(props.form);
        setForm(props.form);
    }, [props.form]);
    
    useEffect(() => {
        setConfig(props.config);
    }, [props.config]);
    
    getFormStore().subscribe((state) => {
        console.log("Form useFormStore useEffect form change", diff(state.form, props.form));
        props.onChange(clone_object(state.form));
    });
    
    
    const [activeItem, setActiveItem] = useState<ItemType | undefined>(undefined);
    // setForm(props.form)
    
    
    // useEffect(() => useFormStore.subscribe((state) => {
    //     props.onChange(clone_object(state.form));
    // }));
    
    return (<>
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
    </>
    );
    
};