import {Group, ItemRegistry} from "@/lib/objects";

import TextItem from "./TextItem.tsx";
import DateTimeItem from "./DateItem.tsx";
import NumberItem from "./NumberItem.tsx";

export const InputGroup = new Group({
    label: "Inputs",
});

const items = new ItemRegistry();
items.registerItem(TextItem, InputGroup);
items.registerItem(NumberItem, InputGroup);
items.registerItem(DateTimeItem, InputGroup);


export default items;