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
    heading: "HTML Content",
    description: "WYSIWYG editor for adding in content to the form",
    hidden: false,
    icon: ItemIcon,
    config: itemConfig
});