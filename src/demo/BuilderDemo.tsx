// @ts-nocheck
import {FormBuilder} from "@/lib";
import "./index.css";
import {Form} from "@/lib/form";
import {Config, FormType} from "@/lib/objects";
import {clone_object} from "@/lib/utilities.ts";
import {FC, useEffect, useState} from "react";
import FormValueEditor from "./input"

let loadcount = 0;
const BuilderDemo: FC = () => {
    console.log("****************** BuilderDemo ", loadcount++, "******************");
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
    
    const defined_config = new Config();
    defined_config.external_data = [
        {
            key: "employees",
            label: "Site Employees",
            display: [""],
            options_func: async () => {
                console.log("Fetching employees", "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
                return employee_data.employees.map((item) => {
                        return {
                            value: item.id,
                            label: `${item.first_name} ${item.last_name}`
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
                                    value: item.key,
                                    label: item.site,
                                    
                                };
                            }
                        );
                    })
                    .catch((payload) => alert("Something went wrong"));
            }
        }
    ];
    defined_config.forms = [
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
            {id: "3", type: "input-text", value: "", label: "WHats your favorite hammer song"},
            {
                "id": "7TF0pd2cD5ppc7ku9cL4C",
                "type": "content-html",
                "label": "",
                "value": "<p><strong>ddddddd </strong>ss</p><figure class=\"table\" style=\"width:100%;\"><table style=\"background-color:hsl(90, 75%, 60%);border-color:hsl(0, 75%, 60%);border-style:solid;\"><tbody><tr><td>a</td><td>&nbsp;</td><td>d</td></tr><tr><td>&nbsp;</td><td>vg</td><td>&nbsp;</td></tr><tr><td>&nbsp;</td><td>&nbsp;</td><td>b</td></tr></tbody></table></figure>",
                "placeholder": ""
            },
            {
                "id": "r-d8EZ7B0dcHyhsAydQkA",
                "type": "input-checkbox",
                "label": "",
                "value": [],
                "source": "employees",
                "options": []
            },
            // {id: "1", type: "embedded-form", form_id: 8, items: []},
        ]
    }
    
    
    const [view, setView] = useState("form");
    
    
    const [form, setForm] = useState(form_data_initial ?? defined_config.forms[0]);
    const [config, setConfig] = useState(defined_config);
    
    const onChange = (value: FormType) => {
        console.log("$$$$$$$$$$$$ BUILDERDEMO $$$$$$$$$$$$$$$$$$", form, value);
        setForm(value);
    };
    
    // setTimeout(()=>{
    //     console.log("3000 BLAMO")
    //     const new_config = clone_object(config)
    //     new_config.external_data.push({
    //         key: "something",
    //         label: "New Something",
    //         display: [""],
    //         options: [
    //             {value:1,label:"something 1"}
    //         ]
    //     })
    //     // setConfig(new_config)
    // },3000)
    
    return (
        <>
            <div id="main">
                {view == "builder" && <FormBuilder
                    form={form}
                    onChange={onChange}
                    config={config}
                />}
                
                {view == "form" && <Form
                    form={form}
                    onChange={onChange}
                    config={config}
                />}
                
                {view == "result" && <div>{JSON.stringify(form)}</div>}
            </div>
           
            
            <div id="output">
                <div>
                    <button onClick={() => setView("builder")}>builder</button>
                    <button onClick={() => setView("form")}>form</button>
                    <button onClick={() => setView("result")}>result</button>
                </div>
                
                <FormValueEditor form={form} onChange={onChange}></FormValueEditor>
            </div>
           
        </>
    );
};

export default BuilderDemo;