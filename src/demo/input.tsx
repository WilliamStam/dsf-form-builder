// @ts-nocheck
import {FormBuilder} from "@/lib";
import "./index.css";
import {Form} from "@/lib/form";
import {Config, FormType} from "@/lib/objects";
import {clone_object, is_different} from "@/lib/utilities.ts";
import {FC, useEffect, useState} from "react";

let loadcount = 0;
const FormValueEditor: FC = ({...props}: {
    form: FormType,
    onChange: (form: FormType) => void,
}) => {
    console.log("****************** FormValueEditor", loadcount++, "******************");
    const [formJSON, setFormJSON] = useState(JSON.stringify(props.form ?? {}));
    //
    const handleOnChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        const v = event.target.value;
        setFormJSON(v);
    };
    
    useEffect(() => {
        const new_value = JSON.stringify(props.form ?? {})
        if (is_different(new_value,props.form ?? {})){
            setFormJSON(new_value)
        }
        
    }, [props.form]);
    
    useEffect(() => {
        const new_value = JSON.parse(formJSON)
        if (is_different(new_value,props.form ?? {})){
            props.onChange(new_value)
        }
       
        
    }, [formJSON]);
    
    
    return (
        <>
        <div>
            <textarea
                value={formJSON}
                onChange={handleOnChange}
            ></textarea>
        </div>
           
        </>
    );
};

export default FormValueEditor;