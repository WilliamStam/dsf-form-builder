import {ItemRegistry} from "@/lib/objects/items.ts";
import ContentItems from "./content"
import InputItems from "./input"
// import InputRegistery from "./input"
// import SelectRegistry from "./select"
// import ContentRegistry from "./content"
const items = new ItemRegistry();
items.addRegistry(ContentItems)
items.addRegistry(InputItems)


export default items;