// @ts-nocheck
import {FormBuilder} from "@/lib";
import "./index.css";
import {Form} from "@/lib/form";
import {Config, FormType} from "@/lib/objects";
import {FC, useEffect, useState} from "react";

const BuilderDemo: FC = () => {
    
    // we have the employee payload right here right now
    const employee_data = {
        pagination: {
            page: 1,
            paginate: 0
        },
        employees: [
            {id: 1, first_name: "a", last_name: "b", role: "dev"},
            {id: 2, first_name: "c", last_name: "d", role: "dev"},
            {id: 3, first_name: "e", last_name: "f", role: "dev"},
        ]
    };
    
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
            reject({error: "Couldnt fetch"});
        }
    });
    
    const config = new Config();
    config.external_select_options = [
        {
            key: "employees",
            label: "Site Employees",
            options_func: async () => {
                console.log("Fetching employees", "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
                return employee_data.employees.map((item) => {
                        return {
                            value: item.id, label: `${item.first_name} ${item.last_name}`
                        };
                    }
                );
            }
        },
        {
            key: "something",
            label: "somethings label",
            options_func: async () => {
                console.log("Fetching employees", "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
                return [
                    {id: 1, label: "a",},
                    {id: 2, label: "c",},
                    {id: 3, label: "e",}
                ];
            },
        },
        {
            key: "sites",
            label: "Company Sites",
            options_func: async () => {
                console.log("Fetching sites", "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
                return sites_data.then((payload) => {
                        return payload.list.map((item) => {
                                return {
                                    value: item.key, label: item.site
                                };
                            }
                        );
                    })
                    .catch((payload) => alert("Something went wrong"));
            }
        }
    ];
    config.forms = [
        {
            id: 4, label: "Test Form", items: [
                {id: "1", type: "embedded-form", form_id: 7, items: []},
                {id: "2", type: "input-select", source: "employees"}
            ]
        },
        {
            id: 7, label: "hammer", items: [
                {id: "3", type: "input-text", value: "", label: "WHats your favorite hammer song"},
                {id: "1", type: "embedded-form", form_id: 8, items: []},
                {id: "2", type: "input-select", source: "sites", label: "where will these be used?"},
            
            ]
        },
        {
            id: 8, label: "screwdriver", items: [
                {id: "1", type: "input-text", value: "", label: "Did it buy the screw dinner first?"},
                {id: "2", type: "input-text", value: "something", label: "got lazy"}
            ]
        },
        {
            id: 9, label: "plaster", items: []
        },
    ];
    
    
    let form_data_initial = {
        "id": 4,
        "label": "Test Form",
        "created_at": null,
        "items": [
            {
                "id": "wPKMWFQUjJGR3G3mZJvlW",
                "type": "input-checkbox",
                "label": "",
                "value": [1,2],
                "source": "employees",
                "options": [],
                "placeholder": ""
            }
        ]
    }
    
    
    const [view, setView] = useState("builder");
    const [form, setForm] = useState(form_data_initial ?? config.forms[0]);
    console.log("BuilderDemo");
    
    const [formJSON, setFormJSON] = useState(JSON.stringify(form));
    //
    const handleOnChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        const v = event.target.value;
        console.log("@@@@@@%%%%%%%%%%%%%%%%%%%%%%%%%", v);
        
        // setFormJSON(v ?? "{}");
        setFormJSON(v);
        // setForm(v ? JSON.parse(v) : {});
    };
    const onChange = (value: FormType) => {
        console.log("$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$", value);
        
        setFormJSON(JSON.stringify(value));
        // setForm(value);
    };
    useEffect(() => {
        // setForm(formJSON ? JSON.parse(formJSON) : {});
    }, [formJSON]);
    
    const panels = {
        builder: FormBuilder,
        form: Form,
    };
    const PanelComponent = panels[view] ?? panels["builder"];
    console.log("Panel",PanelComponent)
    return (
        <>
            <div id="main">
                <PanelComponent
                    form={form}
                    onChange={onChange}
                    config={config}
                />
            </div>
           
            
            <div id="output">
                <div>
                    <button onClick={() => setView("builder")}>builder</button>
                    <button onClick={() => setView("form")}>form</button>
                    <button onClick={() => setView("result")}>result</button>
                </div>
                
                <textarea
                    value={formJSON}
                    onChange={handleOnChange}
                ></textarea>
            </div>
           
        </>
    );
};

export default BuilderDemo;