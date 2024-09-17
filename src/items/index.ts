import {InputGroup, SelectGroup} from "./groups.ts";
import {ItemRegistry} from "@/objects/items.ts";

import TextItem from "./input/TextItem.tsx";
import DateTimeItem from "./input/DateItem.tsx";
import NumberItem from "./input/NumberItem.tsx";
import SelectItem from "./select/SelectItem.tsx";


const items = new ItemRegistry();
items.registerItem(TextItem, InputGroup);
items.registerItem(NumberItem, InputGroup);
items.registerItem(DateTimeItem, InputGroup);
items.registerItem(SelectItem, SelectGroup);


export default items;