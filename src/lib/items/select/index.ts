import {Group, ItemRegistry} from "@/lib/objects";

import SelectItem from "./SelectItem.tsx";

export const SelectGroup = new Group({
    label: "Selects",
});
const items = new ItemRegistry();
items.registerItem(SelectItem, SelectGroup);


export default items;