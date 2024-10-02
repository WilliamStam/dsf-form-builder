// @ts-nocheck
import {FormBuilder} from "@/lib";
import "./index.css";
import {FormType} from "@/lib/objects";
import {Config} from "@/lib/objects";
import {FC, useState} from "react";


const BuilderDemo: FC = () => {
    const [form, setForm] = useState({
        "id": 4,
        "label": "Demo form",
        "created_at": "2024-07-08T16:01:02",
        "items": [
            {
                "id": "KAhmRfNYvIxH3oU1rHQA-",
                "type": "select-select",
                "label": "",
                "value": "",
                "source": "employees",
                "options": [],
                "placeholder": ""
            }
        ]
    });
    console.log("BuilderDemo")
    
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
    
    
    // we have the employee payload right here right now
    const employee_data = {
        pagination:{
            page:1,
            paginate:0
        },
        employees: [
            {id: 1,first_name: "a", last_name: "b",role:"dev"},
            {id: 2,first_name: "c", last_name: "d",role:"dev"},
            {id: 3,first_name: "e", last_name: "f",role:"dev"},
        ]
    }
    
    // this will probably be an axios call
    const sites_data = new Promise((resolve, reject) => {
        let isTrue = true;
        if (isTrue) {
            resolve({
                pagination: {
                    page: 1,
                    paginate: 0
                },
                list: [
                    {key: "x", site: "Some site x"},
                    {key: "y", site: "Some site y"},
                    {key: "z", site: "Some site z"},
                ]
            });
        } else {
            reject({error:"Couldnt fetch"});
        }
    });
    
    const config = new Config()
    config.external_select_options = [
        {
            key: "employees",
            label: "Site Employees",
            options_func: async ()=>{
                console.log("Fetching employees","~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~")
                return employee_data.employees.map((item) => {
                    return {
                        value: item.id, label: `${item.first_name} ${item.last_name}`
                    }}
                )
            }
        },
        {
            key: "sites",
            label: "Company Sites",
            options_func: async ()=> {
                console.log("Fetching sites", "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~")
                return sites_data.then((payload)=> {
                    return payload.list.map((item) => {
                            return {
                                value: item.key, label: item.site
                            }
                        }
                    )
                })
                .catch((payload) => alert("Something went wrong"))
            }
        }
    ]
    // config.forms = [
    //     {
    //         label: "hammer",
    //         config: {id: 7, items: [{type:"form",form_id:9},{type:"select",option_source:"employees"}]}
    //     },
    //     {
    //         label: "screwdriver",
    //         config: {id: 8, items: [{type: "form", form_id: 9}]}
    //     },
    //     {
    //         label: "plaster",
    //         config: {id: 9, items: []}
    //     },
    //
    // ]
    
    return (
        <>
            <div id="builder">
                <FormBuilder form={form} onChange={onChange} config={config}/>
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