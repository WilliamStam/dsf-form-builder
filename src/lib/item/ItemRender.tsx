import items from "@/lib/items";
import {ItemType} from "@/lib/objects";
import React from "react";

export const ItemRender = ({item, onChange}: {
    item: ItemType,
    onChange: (item: ItemType) => void
}) => {
    const item_object = items.getByItem(item);
    if (item && item_object) {
        return React.createElement(item_object.form.render, {
            config: item,
            onChange: onChange
        });
    }
    // component doesn't exist yet
    return React.createElement(
        () => <div>The component {item.type} was not found.</div>,
    );
};