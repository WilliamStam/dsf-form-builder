import items from "@/lib/items";
import {Config, ItemType} from "@/lib/objects";
import React from "react";

export const Settings = ({item, onChange, config}: {
    item: ItemType,
    onChange: (item: ItemType) => void,
    config: Config
}) => {
    const item_object = items.getByItem(item);
    if (item && item_object) {
        return React.createElement(item_object.settings.render, {
            item: item,
            onChange: onChange,
            config:config
        });
    }
    // component doesn't exist yet
    return React.createElement(
        () => <div>The component {item.type} was not found.</div>,
    );
};