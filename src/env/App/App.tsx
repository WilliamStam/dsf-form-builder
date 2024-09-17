import {Builder} from "@/lib";
import "./index.css";
import type {FC} from "react";

const App: FC = () => {
    const config = {
        "id": 4,
        "label": "Daily checklist",
        "config": [
            {
                "id": "a",
                "type": "select",
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
        
        ],
        "created_at": "2024-07-08T16:01:02"
    };
    return (
        <>
        <div>
            <h1>Builder</h1>
            <Builder config={config}/>
        </div>
        </>
    );
};

export default App;