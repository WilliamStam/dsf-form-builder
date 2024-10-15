import {ItemRegistry} from "@/lib/objects/items.ts";
import {Group} from "@/lib/objects/groups.ts";
import SignatureItem from "./signature"
import EmbeddedFormItem from "./form"
// import SelectRegistry from "./select"
// import ContentRegistry from "./content"
const items = new ItemRegistry(new Group({label:"Special"}));
items.registerItem(SignatureItem)
items.registerItem(EmbeddedFormItem)

export default items;