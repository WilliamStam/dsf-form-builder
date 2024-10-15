import {FormType} from "@/lib";

export type ConfigExternalDataResponseType = {
    value: any;
    label: string;
}
export type ConfigExternalSelectData = {
    key: string;
    label: string;
    options?: ConfigExternalDataResponseType[];
    options_func?: () => Promise<ConfigExternalDataResponseType[]>;
}


export class Config {
    constructor(
        public external_select_options: ConfigExternalSelectData[] = [],
        public forms: FormType[] = []
    ) {
    }
}

export default Config;