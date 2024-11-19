import {FormType} from "@/lib";

export type ConfigExternalDataResponseType = {
    value: any;
    label: string;
    image?: string;
}
export type ConfigExternalDataType = {
    key: string;
    label: string;
    options?: ConfigExternalDataResponseType[];
    options_func?: () => Promise<ConfigExternalDataResponseType[]>;
}

export type ConfigType = {
    external_data: ConfigExternalDataType[];
    forms: FormType[];
}
export const empty_config = {
    external_data: [],
    forms: []
};

export type ItemTypeWithExternalData = {
    source: string;
    options: ConfigExternalDataResponseType[];
}


export const getOptionsFromExternalData = (data: ItemTypeWithExternalData, config: ConfigType ): Promise<ConfigExternalDataResponseType[]> => {
    if (data.source == "local" || !data.source) {
        return new Promise((resolve, reject) => {
            if (data.options) {
                resolve(data.options);
            } else {
                reject({error: "Item doesnt have options"});
            }
        });
    }
    const external: ConfigExternalDataType | undefined = config.external_data.find((item) => item.key == data.source);
    
    return new Promise<ConfigExternalDataResponseType[]>((resolve, reject) => {
        if (external){
            if (external.options) {
                resolve(external.options);
            }
            if (external.options_func) {
                external.options_func().then((y: ConfigExternalDataResponseType[]) => resolve(y))
                
            }
        } else {
            reject({error: `Config external_data doesnt contain the source [${data.source}]`});
        }
    })
}