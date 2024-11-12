import {Config} from "@/lib/objects";
import {is_different} from "@/lib/utilities.ts";
import {create} from "zustand";


interface ConfigState {
    config: Config;
    setConfig: (config: Config) => void;
}

export const useConfigStore = create<ConfigState>()((set, get) => ({
    config: new Config(),
    setConfig: (value: Config) => {
        if (is_different(get().config, value)) {
            set(() => ({config: value}));
        }
    },
}));

export default useConfigStore;