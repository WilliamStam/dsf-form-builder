import {formState, FormType} from "@/objects/forms.ts";
import type {FC} from "react";
import "./styles/builder.scss"
export type Props = {
    /** Set initial value */
    config?: FormType;
};

export const Builder: FC<Props> = ({config}) => {
    const {form, setForm} = formState(config);
    console.log(setForm);
    return (
        <>
            <div className="form-builder">
                <h1>- {form.label} =====</h1>
                <div>
                    {JSON.stringify(form)}
                </div>
            </div>
        </>
    );
};