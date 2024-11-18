import {OptionType} from "@/lib/items/input/checkbox/config.ts";
import {ConfigExternalDataResponseType, ConfigExternalDataType, ConfigType} from "@/lib/objects";
import {empty_config} from "@/lib/objects/config.ts";
import {createZustandContext} from "@/lib/objects/store.tsx";
import {is_different} from "@/lib/utilities.ts";
import {diff} from "deep-object-diff";
import {create} from "zustand";
import {StoreApi, useStore} from "zustand/index";

interface ConfigState {
    config: ConfigType;
    setConfig: (config: ConfigType) => void;
    getExternalDataOptions: (source: string) => ConfigExternalDataResponseType[];
}


export const ConfigStoreContext = createZustandContext<ConfigType, StoreApi<ConfigState>>(
    (initialValue: ConfigType) => {
        let config = {...empty_config, ...initialValue};
        return create<ConfigState>()((set, get) => ({
            config: config,
            setConfig: (value: ConfigType) => {
                console.log("ConfigStoreContext setConfig", diff(get().config, value));
                if (is_different(get().config, value)) {
                    set(() => ({config: value}));
                }
            },
            getExternalDataOptions: (source: string): ConfigExternalDataResponseType[] => {
                
                const external: ConfigExternalDataType | undefined = get()
                    .config
                    .external_data
                    .find((item) => item.key == source);
                console.log("external", external, source, config.external_data);
                if (external) {
                    if (external.options) {
                        console.log("external.options");
                        return external.options;
                    }
                    if (external.options_func) {
                        console.log("external.options_func");
                        external.options_func().then((y: OptionType[]) => {
                            return y;
                        });
                    }
                }
                return [];
            }
        }));
    },
);
export const getConfigStore = () => {
    const store = ConfigStoreContext.useContext();
    console.log("getConfigStore", store);
    if (!store) {
        throw new Error("Missing ConfigStoreContext");
    }
    return store;
};

export const useConfigStore = () => useStore(getConfigStore());


export default useConfigStore;