import {FormType} from "@/lib/objects";
import {empty_form, fixFormItems} from "@/lib/objects/forms.ts";
import {is_different} from "@/lib/utilities.ts";
import {create} from 'zustand'


interface FormState {
    form: FormType;
    setForm: (form: FormType) => void;
}

export const useFormStore = create<FormState>()((set, get) => ({
    form: empty_form,
    setForm: (value: FormType) => {
        console.log("useFormStore setForm", get().form,value);
        if (is_different(get().form,value)) {
            set(() => ({form: fixFormItems(value)}))
        }
    },
}))

export default useFormStore;