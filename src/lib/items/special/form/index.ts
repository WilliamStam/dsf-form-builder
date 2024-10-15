import {Item, ItemRenderer} from "@/lib/objects";
import {itemConfig, ItemConfigType} from "./config.ts";
import FormComponent, {} from "./FormComponent.tsx";
import {ReactComponent as ItemIcon} from "./icon.svg";
import SettingsComponent, {SettingsValidation} from "./SettingsComponent.tsx";

export default new Item({
    type: itemConfig.type,
    form: new ItemRenderer({
        render: FormComponent,
        validation: null
    }),
    settings: new ItemRenderer({
        render: SettingsComponent,
        validation: SettingsValidation
    }),
    heading: "Embedded form",
    description: "Embed a form",
    hidden: false,
    icon: ItemIcon,
    data: itemConfig
});