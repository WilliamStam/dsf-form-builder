import {FormType} from "@/lib";
import Config from "@/lib/objects/config.ts";
import {Group} from "./groups.ts";
import React from "react";


export type ItemType = {
    id: string;
    type: string;
}
export type ItemOnChangeType = (item: ItemType) => void


export interface FieldComponentProps<T> {
    item: T;
    onChange: (value: ItemType) => void;
    form: FormType,
    config: Config
}
type ValidationFunction = (item: any) => { [key: string]: string[] }

export class ItemRendererInit {
    constructor(
        public render: React.FC<FieldComponentProps<ItemType>>,
        /* tslint:disable-next-line:no-any */
        public validation: ValidationFunction | null | undefined
    ) {
    }
}

export class ItemRenderer extends ItemRendererInit {
    constructor(init: ItemRendererInit) {
        super(
            init.render,
            init.validation,
        );
    }
}

export class ItemInit {
    constructor(
        public form: ItemRenderer,
        public settings: ItemRenderer,
        public type: string,
        public heading: string,
        public description: string,
        public hidden: boolean,
        public icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>,
        public data: ItemType,
        public group?: Group,
    ) {
        if (!this.group) {
            this.group = new Group({
                label: "None",
            });
        }
    }
}

export class Item extends ItemInit {
    constructor(init: ItemInit) {
        
        super(
            init.form,
            init.settings,
            
            init.type,
            init.heading,
            init.description,
            init.hidden,
            init.icon,
            init.data,
            init.group,
        );
    }
}


export class ItemRegistry {
    constructor(
        public group: Group | null = null,
        public items: Item[] = [],
        
    ) {
    }
    
    registerItem(item: Item, group?: Group): void {
        if (group) {
            item.group = group;
        } else if (this.group){
            item.group = this.group
        }
        this.items.push(item);
    }
    
    addRegistry(registry: ItemRegistry): void {
        for (const item of registry) {
            this.items.push(item);
        }
    }
    
    getByItem(item: ItemType): Item | undefined {
        if (item) {
            return this.items.find(it => it.type === item.type);
        }
        return undefined;
    }
    //
    // getByType(type: string): Item | undefined {
    //     return this.items.find(item => item.type === type);
    // }
    
    * [Symbol.iterator]() {
        for (const item of this.items) {
            yield item;
        }
    }
    
    map<U>(callback: (item: Item, index: number, array: Item[]) => U): U[] {
        return this.items.map((item, index, array) => callback(item, index, array));
    }
    
}


const fix_item_config: ItemType = (items: ItemRegistry, item: ItemType) => {
    console.log("looking at ", item)
}