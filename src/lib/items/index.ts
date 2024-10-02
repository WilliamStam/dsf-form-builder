import {ItemRegistry} from "@/lib/objects/items.ts";
import ContentItems from "./content"
import InputItems from "./input"
import SpecialItems from "./special"
// import InputRegistery from "./input"
// import SelectRegistry from "./select"
// import ContentRegistry from "./content"
const items = new ItemRegistry();
items.addRegistry(InputItems)
items.addRegistry(ContentItems)

items.addRegistry(SpecialItems)


export default items;