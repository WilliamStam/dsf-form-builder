import {FormType} from "@/lib/objects";
import {empty_form, fixFormItems} from "@/lib/objects/forms.ts";
import {is_different} from "@/lib/utilities.ts";
import {createZustandContext} from "@/lib/objects/store.tsx"
// import React from "react";
// import {create} from 'zustand'

//
// interface FormState {
//     form: FormType;
//     setForm: (form: FormType) => void;
// }
//
// export const useFormStore = create<FormState>()((set, get) => ({
//     form: empty_form,
//     setForm: (value: FormType) => {
//         console.log("useFormStore setForm", get().form,value);
//         if (is_different(get().form,value)) {
//             set(() => ({form: fixFormItems(value)}))
//         }
//     },
// }))
//
// export default useFormStore;

// ---------------------------------------------------------------------------
import React from "react";
import {createStore, StoreApi, useStore, create} from "zustand";
// -----------------------

interface FormState {
    form: FormType;
    setForm: (form: FormType) => void;
}
export const FormStoreContext = createZustandContext<FormType, StoreApi<FormState>>(
    (initialValue: FormType) => {
        let form = {...empty_form, ...initialValue};
        return create<FormState>()((set, get) => ({
            form: form,
            setForm: (value: FormType) => {
                console.log("useFormStore setForm", get().form, value, is_different(get().form, value));
                if (is_different(get().form, value)) {
                    set(() => ({form: fixFormItems(value)}))
                }
            },
        }));
    },
);
export const getFormStore = () => {
    const store = FormStoreContext.useContext()
    console.log("useFormStore", store);
    if (!store) {
        throw new Error('Missing FormStoreContext')
    }
    return store
}

export const useFormStore = () => useStore(getFormStore())



export default useFormStore

//
// const App = () => {
//     return (
//         <FormStoreContext.Provider initialValue={empty_form}>
//       My App
//     </FormStoreContext.Provider>
//     );
// };