import {Item, ItemRenderer} from "@/lib/objects";
import {itemConfig} from "./config.ts";
import FormComponent, {FormValidation} from "./FormComponent.tsx";
import {ReactComponent as ItemIcon} from "./icon.svg";
import SettingsComponent, {SettingsValidation} from "./SettingsComponent.tsx";

export default new Item({
    type: itemConfig.type,
    form: new ItemRenderer({
        render: FormComponent,
        validation: FormValidation
    }),
    settings: new ItemRenderer({
        render: SettingsComponent,
        validation: SettingsValidation
    }),
    heading: "Text input",
    description: "a simple box to insert a value into",
    hidden: false,
    icon: ItemIcon,
    data: itemConfig
});