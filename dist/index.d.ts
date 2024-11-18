import { default as default_2 } from 'react';
import { JSX as JSX_2 } from 'react/jsx-runtime';

declare type ConfigExternalDataResponseType = {
    value: any;
    label: string;
    image?: string;
};

declare type ConfigExternalDataType = {
    key: string;
    label: string;
    options?: ConfigExternalDataResponseType[];
    options_func?: () => Promise<ConfigExternalDataResponseType[]>;
};

export declare type ConfigType = {
    external_data: ConfigExternalDataType[];
    forms: FormType[];
};

declare interface FieldComponentProps<T> {
    item: T;
    onChange: (value: ItemType) => void;
}

export declare const Form: ({ ...props }: {
    form: FormType;
    onChange: (value: FormType) => void;
    config: ConfigType;
}) => JSX_2.Element;

export declare const FormBuilder: ({ ...props }: {
    form: FormType;
    onChange: (value: FormType) => void;
    config: ConfigType;
}) => JSX_2.Element;

export declare type FormType = {
    id: number | null;
    label: string | null;
    created_at: string | null;
    items: ItemType[];
};

export declare const Item: ({ item, onChange }: {
    item: ItemType;
    onChange: (item: ItemType) => void;
}) => default_2.FunctionComponentElement<FieldComponentProps<ItemType>> | default_2.FunctionComponentElement<{}>;

export declare type ItemType = {
    id: string;
    type: string;
};

export { }
