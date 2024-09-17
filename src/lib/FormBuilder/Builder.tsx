import type {FC} from "react";

import {FormType, formState} from "@/lib/objects/forms.ts";
export type Props = {
    /** Set initial value */
    config?: FormType;
};

export const Builder: FC<Props> = ({config}) => {
    const {form, setForm} = formState(config);
    console.log(setForm)
    return (
        <div>
            {JSON.stringify(form)}
        </div>
    );
    
    
};