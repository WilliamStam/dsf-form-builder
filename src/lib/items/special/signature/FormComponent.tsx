import {FieldComponentProps} from "@/lib/objects";
import {clone_object} from "@/lib/utilities.ts";
import React, {useEffect, useState} from "react";
import SignaturePad from "react-signature-pad-wrapper";
import {itemConfig, ItemConfigType} from "./config.ts";

const FormComponent: React.FC<FieldComponentProps<ItemConfigType>> = ({item, onChange}) => {
    const [data, setData] = useState<ItemConfigType>({...itemConfig, ...item});
    useEffect(() => {
        setData({...itemConfig, ...item});
    }, [item]);
    
    const id = Math.random().toString(36).substring(2, 15);
    
    const signaturePadRef = React.createRef<SignaturePad>();
    const handleClear = () => {
        const signaturePad = signaturePadRef.current;
        
        if (signaturePad) {
            signaturePad.instance.clear();
        }
        const new_item = clone_object(data);
        new_item.value = [];
        setData(new_item);
        onChange(new_item);
    };
    const handleSave = () => {
        const signaturePad = signaturePadRef.current;
        console.log(signaturePad);
        if (!signaturePad) {
            return;
        }
        const new_item = clone_object(data);
        if (signaturePad.isEmpty()) {
            new_item.value = [];
        } else {
            new_item.value = signaturePad.toData();
            
        }
        setData(new_item);
        onChange(new_item);
    };
    useEffect(() => {
        if (data.value && signaturePadRef.current) {
            signaturePadRef.current.fromData(data.value);
        }
    }, [data]);
    
    const style = {
        height: "10rem", width: "100%", border: "1px solid #cccccc", boxShadow: "0 0 0.32rem #ccc inset"
    };
    
    return (
        <>
            <article className={`${item.type}-area`}>
                <div className="flex flex-column gap-2">
                <label htmlFor={id}>{data.label}</label>
                <div>
                    <SignaturePad
                        ref={signaturePadRef} options={{penColor: "rgb(0, 0, 0)"}} redrawOnResize={true}
                        canvasProps={{style: style}}
                    />
                </div>
                
                <button onClick={handleClear}>clear</button>
                <button onClick={handleSave}>save</button>
            </div>
            </article>
            
        </>
    );
};
export const FormValidation = (item: ItemConfigType) => {
    console.log("Validation", item);
    return {};
};
export default FormComponent;