import {FormType} from "@/lib/objects";
import {empty_form, fixFormItems} from "@/lib/objects/forms.ts";
import {createZustandContext} from "@/lib/objects/store.tsx";
import {is_different} from "@/lib/utilities.ts";
import {diff} from "deep-object-diff";
import {create, StoreApi, useStore} from "zustand";

interface FormState {
    form: FormType;
    setForm: (form: FormType) => void;
}

export const FormStoreContext = createZustandContext<FormType, StoreApi<FormState>>(
    (initialValue: FormType) => {
        if (!initialValue) initialValue = empty_form
        let form = fixFormItems({...empty_form, ...initialValue});
        return create<FormState>()((set, get) => ({
            form: form,
            setForm: (value: FormType) => {
                value = {...empty_form, ...value ?? {}}
                if (value && is_different(get().form, value)) {
                    console.log("useFormStore setForm", diff(get().form, value));
                    set(() => ({form: fixFormItems(value)}));
                }
            },
        }));
    },
);
export const getFormStore = () => {
    const store = FormStoreContext.useContext();
    console.log("useFormStore", store);
    if (!store) {
        throw new Error("Missing FormStoreContext");
    }
    return store;
};

export const useFormStore = () => useStore(getFormStore());


export default useFormStore;

//
// const App = () => {
//     return (
//         <FormStoreContext.Provider initialValue={empty_form}>
//       My App
//     </FormStoreContext.Provider>
//     );
// };