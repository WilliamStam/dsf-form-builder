import {ItemRegistry} from "@/lib/objects/items.ts";
import {Group} from "@/lib/objects/groups.ts";
// import DateItem from "./date"
import NumberItem from "./number"
import SelectItem from "./select"
import TextItem from "./text"

const items = new ItemRegistry(new Group({label: "Inputs"}));
// items.registerItem(DateItem)
items.registerItem(NumberItem)
items.registerItem(SelectItem)
items.registerItem(TextItem)


export default items;