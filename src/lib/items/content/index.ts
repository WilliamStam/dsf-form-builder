import {Group, ItemRegistry} from "@/lib/objects";

import HtmlItem from "./HtmlItem.tsx";

export const ContentGroup = new Group({
    label: "Content",
});

const items = new ItemRegistry();
items.registerItem(HtmlItem, ContentGroup);


export default items;