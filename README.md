# Install

```Bash
npm install git+https://github.com/WilliamStam/dsf-form-builder
```


# Usage

Css for the demo. the builder needs a "height" block. it tries to frill its parent's size
```css
body {
    margin: 0;
}
#builder {
    height: calc(100vh - 10rem);
}
#output {
    height: 10rem;
    padding: 0.5rem;
}
```

component

```jsx
import React, {useState} from "react";
import {FormBuilder} from "dsf-form-builder";
import "dsf-form-builder/dist/style.css"
import "./style.scss"
export default function App() {
    const config: ConfigType = {
        external_data: [
              {
                key: "something",
                label: "somethings label",
                options_func: async () => {
                    console.log("XXXXXXXXX Fetching employees", "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
                    return [
                        {id: 1, label: "a",},
                        {id: 2, label: "c",},
                        {id: 3, label: "e",}
                    ];
                },
            },
           
        ],
        forms: [
            {
                id: 4, label: "Test Form", items: [
                    {id: "1", type: "embedded-form", form_id: 7, items: []},
                    {id: "2", type: "input-select", source: "employees"}
                ]
            },
           
        ]
    };
    
    const [form, setForm] = useState({
        "id": 4,
        "label": "Demo form",
        "config": [
            {
                "id": "a",
                "type": "select-select",
                "options": [
                    {
                        "value": "1",
                        "label": "1"
                    },
                    {
                        "value": "2",
                        "label": "2"
                    }
                ],
                "name": "What date",
                "value": "1"
            },
            
            {
                "id": "b",
                "type": "input-text",
                "label": "Text"
            },
            {
                "id": "c",
                "type": "input-date",
                "label": "Date"
            },
            {
                "id": "d",
                "type": "input-number",
                "label": "Number"
            },
            {
                "id": "e",
                "type": "content-html",
                "label": "HTML",
                "value": "This <strong>IS</strong> sparta!"
            },
        
        ],
        "created_at": "2024-07-08T16:01:02"
    });
    const [formJSON, setFormJSON] = useState(JSON.stringify(form));
    const handleOnChange = (event) => {
        const v = event.target.value;
        setFormJSON(v ?? "{}");
        setForm(v ? JSON.parse(v) : {});
    };
    const onChange = (form) => {
        setFormJSON(JSON.stringify(form));
    };
        
    return (
        <>
            <div id="builder">
                <FormBuilder
                    form={form}
                    onChange={onChange}
                    config={config}
                />
            </div>
            <div id="output">
                {JSON.stringify(form)}
            </div>
        </>
    )
}
```