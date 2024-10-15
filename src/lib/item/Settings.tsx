import items from "@/lib/items";
import {Config, ItemType} from "@/lib/objects";
import {FormType} from "@/lib/objects";
import React from "react";

export const Settings = ({item, onChange, form, config}: {
    item: ItemType,
    onChange: (item: ItemType) => void,
    form: FormType,
    config: Config
}) => {
    const item_object = items.getByItem(item);
    if (item && item_object) {
        return React.createElement(item_object.settings.render, {
            item: item,
            onChange: onChange,
            form:form,
            config:config
        });
    }
    // component doesn't exist yet
    return React.createElement(
        () => <div>The component {item.type} was not found.</div>,
    );
};