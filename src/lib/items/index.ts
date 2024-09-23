import {ItemRegistry} from "@/lib/objects/items.ts";
import InputRegistery from "./input"
import SelectRegistry from "./select"
import ContentRegistry from "./content"
const items = new ItemRegistry();
items.addRegistry(InputRegistery);
items.addRegistry(SelectRegistry);
items.addRegistry(ContentRegistry);


export default items;