import {ItemRegistry} from "@/lib/objects/items.ts";
import {Group} from "@/lib/objects/groups.ts";
// import DateItem from "./date"
import NumberItem from "./number"
import SelectItem from "./select"
import TextItem from "./text"
import CheckboxItem from "./checkbox"
import RadioItem from "./radio"

const items = new ItemRegistry(new Group({label: "Inputs"}));
// items.registerItem(DateItem)
items.registerItem(TextItem)
items.registerItem(NumberItem)
items.registerItem(SelectItem)
items.registerItem(CheckboxItem)
items.registerItem(RadioItem)


export default items;