import type {FC} from "react";

import {FormType, formState} from "@/objects/forms.ts";
export type Props = {
    /** Set initial value */
    config?: FormType;
};

export const Builder: FC<Props> = ({config}) => {
    const {form, setForm} = formState(config);
    console.log(setForm)
    return (
        <>
            <h1>{form.label}</h1>
        <div>
            {JSON.stringify(form)}
        </div>
        </>
    );
    
    
};