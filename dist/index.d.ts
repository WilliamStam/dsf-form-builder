import { FC } from 'react';

export declare const Builder: FC<Props>;

declare type FormType = {
    id: number | null;
    label: string | null;
    created_at: string | null;
    config: ItemType[];
};

declare type ItemType = {
    id: string;
    type: string;
};

declare type Props = {
    /** Set initial value */
    config?: FormType;
};

export { }
