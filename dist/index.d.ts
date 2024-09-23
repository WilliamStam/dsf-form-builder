import { default as default_2 } from 'react';
import { JSX as JSX_2 } from 'react/jsx-runtime';

declare interface FieldComponentProps {
    config: ItemType;
    onChange: (value: ItemType) => void;
}

export declare const FormBuilder: ({ config, onChange }: {
    config?: FormType;
    onChange: (form: FormType) => void;
}) => JSX_2.Element;

export declare type FormType = {
    id: number | null;
    label: string | null;
    created_at: string | null;
    config: ItemType[];
};

export declare const ItemRender: ({ item, onChange }: {
    item: ItemType;
    onChange: (item: ItemType) => void;
}) => default_2.FunctionComponentElement<FieldComponentProps> | default_2.FunctionComponentElement<{}>;

export declare type ItemType = {
    id: string;
    type: string;
};

export { }
