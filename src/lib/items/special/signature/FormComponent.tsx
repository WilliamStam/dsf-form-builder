import {FieldComponentProps} from "@/lib/objects";
import {clone_object} from "@/lib/utilities.ts";
import React, {useEffect, useState} from "react";
import {itemConfig, ItemConfigType} from "./config.ts";
import SignaturePad from 'react-signature-pad-wrapper';

const FormComponent: React.FC<FieldComponentProps> = ({config, onChange}) => {
    const [item, setItem] = useState<ItemConfigType>({...itemConfig, ...config});
    useEffect(() => {
        setItem({...itemConfig, ...config});
    }, [config]);
    
    const id = Math.random().toString(36).substring(2, 15);

    const signaturePadRef = React.createRef<SignaturePad>();
    const handleClear = () => {
        const signaturePad = signaturePadRef.current;
        
        if(signaturePad) {
            signaturePad.instance.clear();
        }
    }
    const handleSave = () => {
        const signaturePad = signaturePadRef.current;
        console.log(signaturePad);
        if (!signaturePad) {
            return;
        }
        const new_item = clone_object(item)
        if (signaturePad.isEmpty()) {
            new_item.value = []
        } else {
            new_item.value = signaturePad.toData()
            
        }
        setItem(new_item);
        onChange(new_item);
    }
    useEffect(() => {
        if (item.value && signaturePadRef.current) {
            console.log("DRAW THE SHIT")
            signaturePadRef.current.fromData(item.value)
        }
    }, [item]);
   
    
    return (
        <>
            <div className="flex flex-column gap-2">
                <label htmlFor={id}>{item.label}</label>
                <SignaturePad ref={signaturePadRef} options={{minWidth: 5, maxWidth: 10, penColor: 'rgb(0, 0, 0)'}} redrawOnResize/>
                <button onClick={handleClear}>clear</button>
                <button onClick={handleSave}>save</button>
            </div>
        </>
    );
};
export const FormValidation = (item: ItemConfigType) => {
    console.log("Validation", item);
    return {}
};
export default FormComponent;