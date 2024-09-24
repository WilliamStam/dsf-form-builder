import {FormBuilder} from "@/lib";
import "./index.css";
import {FormType} from "@/lib/objects";
import {FC, useState} from "react";


const BuilderDemo: FC = () => {
    const [form, setForm] = useState({
        "id": 4, "label": "Demo form", "created_at": "2024-07-08T16:01:02", "config": [
            {"id": "e", "type": "content-html", "label": "Html Item", "value": "hi <strong>there</strong> html"}, {
                "id": "5u4ldd1pbqv3RRPfNyfN9",
                "type": "special-signature",
                "label": "aa",
                "value": [
                    {
                        "penColor": "rgb(0, 0, 0)",
                        "dotSize": 0,
                        "minWidth": 5,
                        "maxWidth": 10,
                        "velocityFilterWeight": 0.7,
                        "compositeOperation": "source-over",
                        "points": [
                            {"time": 1727197915337, "x": 58, "y": 54, "pressure": 0.5},
                            {"time": 1727197915445, "x": 52, "y": 61, "pressure": 0.5},
                            {"time": 1727197915481, "x": 45, "y": 69, "pressure": 0.5},
                            {"time": 1727197915498, "x": 42, "y": 74, "pressure": 0.5},
                            {"time": 1727197915516, "x": 39, "y": 79, "pressure": 0.5},
                            {"time": 1727197915532, "x": 36, "y": 84, "pressure": 0.5},
                            {"time": 1727197915550, "x": 35, "y": 89, "pressure": 0.5},
                            {"time": 1727197915588, "x": 33, "y": 96, "pressure": 0.5},
                            {"time": 1727197915622, "x": 35, "y": 102, "pressure": 0.5},
                            {"time": 1727197915658, "x": 43, "y": 109, "pressure": 0.5},
                            {"time": 1727197915674, "x": 50, "y": 113, "pressure": 0.5},
                            {"time": 1727197915690, "x": 60, "y": 116, "pressure": 0.5},
                            {"time": 1727197915706, "x": 72, "y": 118, "pressure": 0.5},
                            {"time": 1727197915722, "x": 85, "y": 118, "pressure": 0.5},
                            {"time": 1727197915738, "x": 96, "y": 116, "pressure": 0.5},
                            {"time": 1727197915755, "x": 107, "y": 114, "pressure": 0.5},
                            {"time": 1727197915773, "x": 114, "y": 112, "pressure": 0.5},
                            {"time": 1727197915808, "x": 117, "y": 106, "pressure": 0.5},
                            {"time": 1727197915841, "x": 117, "y": 97, "pressure": 0.5},
                            {"time": 1727197915937, "x": 117, "y": 104, "pressure": 0.5},
                            {"time": 1727197915954, "x": 119, "y": 112, "pressure": 0.5},
                            {"time": 1727197915970, "x": 124, "y": 119, "pressure": 0.5},
                            {"time": 1727197915986, "x": 130, "y": 127, "pressure": 0.5},
                            {"time": 1727197916003, "x": 144, "y": 135, "pressure": 0.5},
                            {"time": 1727197916020, "x": 161, "y": 138, "pressure": 0.5},
                            {"time": 1727197916035, "x": 177, "y": 136, "pressure": 0.5},
                            {"time": 1727197916051, "x": 189, "y": 128, "pressure": 0.5},
                            {"time": 1727197916067, "x": 197, "y": 119, "pressure": 0.5},
                            {"time": 1727197916083, "x": 205, "y": 108, "pressure": 0.5},
                            {"time": 1727197916100, "x": 212, "y": 99, "pressure": 0.5},
                            {"time": 1727197916134, "x": 217, "y": 93, "pressure": 0.5},
                            {"time": 1727197916178, "x": 223, "y": 96, "pressure": 0.5},
                            {"time": 1727197916195, "x": 228, "y": 100, "pressure": 0.5},
                            {"time": 1727197916213, "x": 234, "y": 104, "pressure": 0.5},
                            {"time": 1727197916248, "x": 240, "y": 113, "pressure": 0.5}
                        ]
                    }
                ],
                "color": "#000000",
                "form": {},
                "settings": {},
                "heading": "Signature",
                "description": "Signature capture block",
                "hidden": false,
                "config": {
                    "id": "5u4ldd1pbqv3RRPfNyfN9",
                    "type": "special-signature",
                    "label": "",
                    "value": "",
                    "color": "#000000"
                },
                "group": {"label": "Special"}
            }
        ]
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