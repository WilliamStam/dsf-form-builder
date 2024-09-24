import {ItemRegistry} from "@/lib/objects/items.ts";
import {Group} from "@/lib/objects/groups.ts";
import HtmlItem from "./html"
// import InputRegistery from "./input"
// import SelectRegistry from "./select"
// import ContentRegistry from "./content"
const items = new ItemRegistry(new Group({label:"Content"}));
items.registerItem(HtmlItem)

export default items;