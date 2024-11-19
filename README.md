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

```

components

FormBuilder, Form, Result

pass in the same parameters for each of them 

```tsx
import React, {useState} from "react";
import {FormBuilder, Form, Result, FormType, ConfigType} from "dsf-form-builder";
import "dsf-form-builder/dist/style.css"
import "./style.scss"
export default function App() {
    const initial_config: ConfigType = {
        external_data: [
            {
                key: "something",
                label: "somethings label",
                options_func: async () => {
                    return [
                        {value: 1, label: "a",},
                        {value: 2, label: "c",},
                        {value: 3, label: "e",}
                    ];
                },
            },
        
        ],
        forms: [
            {
                id: 4, label: "Test Form 4", items: [
                    {id: "1", type: "embedded-form", form_id: 7, items: []},
                    {id: "2", label: "Select field", type: "input-select", source: "something"},
                    {id: "3", label: "Checkboxes", type: "input-checkbox", source: "something"},
                    {id: "4", label: "Radios", type: "input-radio", source: "something"},
                ]
            },
            {
                id: 7, label: "Test Form 7", items: [
                    {
                        id: "3",
                        type: "input-radio",
                        label: "Radio button block",
                        value: [],
                        options: [{value: 1, label: "One"}, {value: 2, label: "Two"}, {value: 3, label: "Three"}],
                        display: "button-block"
                    },
                ]
            },
        
        ]
    };
    const initial_form: FormType = {
        id: 5,
        label: "Demo form",
        items: [
            {id: "1", type: "embedded-form", form_id: 4, items: []},
            {id: "2", label: "Choose something", type: "input-select", source: "something"},
            {id: "3", label: "Enter some text", type: "input-text", value: ""},
        ],
    };
    
    
    const [form, setForm] = useState(initial_form);
    const [config, setConfig] = useState(initial_config);
    
    const onChange = (form) => {
        console.log("Form changed")
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
            <div id="form">
                <Form
                    form={form}
                    onChange={onChange}
                    config={config}
                />
            </div>
            <div id="result">
                <Result
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



https://docs.github.com/en/packages/working-with-a-github-packages-registry/working-with-the-npm-registry