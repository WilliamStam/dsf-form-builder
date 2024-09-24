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
    )
}
```