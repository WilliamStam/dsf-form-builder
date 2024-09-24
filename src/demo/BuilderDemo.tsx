import {FormBuilder} from "@/lib";
import "./index.css";
import {FormType} from "@/lib/objects";
import {FC, useState} from "react";


const BuilderDemo: FC = () => {
    const [form, setForm] = useState({
        "id": 4,
        "label": "Demo form",
        "config": [
            {
                "id": "a",
                "type": "select-select",
                "label":"Select input",
                "options": [
                    {
                        "value": "1",
                        "label": "1"
                    },
                    {
                        "value": "2",
                        "label": "2"
                    },
                    {
                        "value": "3",
                        "label": "3"
                    },
                    {
                        "value": "4",
                        "label": "4"
                    },
                    {
                        "value": "5",
                        "label": "5"
                    },
                    {
                        "value": "6",
                        "label": "6"
                    },
                    {
                        "value": "7",
                        "label": "7"
                    }
                ],
                "value": "1"
            },
            
            {
                "id": "b",
                "type": "input-text",
                "label": "Text Input"
            },
            {
                "id": "c",
                "type": "input-date",
                "label": "Date Input"
            },
            {
                "id": "d",
                "type": "input-number",
                "label": "Number Input"
            },
            {
                "id": "e",
                "type": "content-html",
                "label": "Html Item",
                "value": "hi <strong>there</strong> html"
            },
        
        ],
        "created_at": "2024-07-08T16:01:02"
    });
    
    const [formJSON, setFormJSON] = useState(JSON.stringify(form));
    //
    const handleOnChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        const v = event.target.value;
        console.log("@@@@@@%%%%%%%%%%%%%%%%%%%%%%%%%", v);
        
        setFormJSON(v ?? "{}");
        setForm(v ? JSON.parse(v) : {});
    };
    const onChange = (form: FormType) => {
        console.log("$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$", form);
        
        setFormJSON(JSON.stringify(form));
    };
    
    
    return (
        <>
            <div id="builder">
                <FormBuilder form={form} onChange={onChange}/>
            </div>
            
            <div id="output">
                <textarea
                    style={{height: "100%", width: "100%"}}
                    value={formJSON}
                    onChange={handleOnChange}
                ></textarea>
            </div>
           
        </>
    );
};

export default BuilderDemo;