import type {FC} from 'react';

import {Builder} from '@/lib';
import './index.css';
import {FormType} from "@/lib/objects/forms.ts"

const App: FC = () => {
    const config: FormType = {
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
    }
    return (
        <div>
            <Builder config={config} />
        </div>
    );
};

export default App;