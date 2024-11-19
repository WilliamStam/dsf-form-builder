import {FieldComponentProps} from "@/lib/objects";
import {getOptionsFromExternalData, } from "@/lib/objects/config.ts";
import {useConfigStore} from "@/lib/stores";
import {clone_object} from "@/lib/utilities.ts";
import {Checkbox, CheckboxChangeEvent} from "primereact/checkbox";
import {Skeleton} from "primereact/skeleton";
import React, {useEffect, useState} from "react";
import {itemConfig, ItemConfigType, OptionType, displayOptions} from "./config.ts";
import "./style.scss";


let loadcount = 0;
const FormComponent: React.FC<FieldComponentProps<ItemConfigType>> = ({item, onChange}) => {
    console.log("           ***************", item.type, item.id, loadcount++, "***************");
    const {config,} = useConfigStore();
    const [data, setData] = useState<ItemConfigType>({...itemConfig, ...item});
    const [options, setOptions] = useState<OptionType[] | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    
    useEffect(() => {
        if (item.source != data.source || options == null) {
            setLoading(true);
            getOptionsFromExternalData(item, config).then(y => {
                setOptions(y);
                setLoading(false);
            });
        }
        setData({...data, ...item});
    }, [item]);
    
    
    const handleOnChange = (event: CheckboxChangeEvent) => {
        const updatedData: ItemConfigType = clone_object({...{...itemConfig, ...item}});
        // onChange(updatedData);
        const v = event.target;
        if (v.checked) {
            updatedData.value.push(v.value);
        } else {
            updatedData.value = updatedData.value.filter((item) => item != v.value);
        }
        console.log("CHECKBOX CHANGE", updatedData);
        setData(updatedData);
        onChange(updatedData);
    };
    
    
    const id = `${data.type}-${data.id}`;
    
    return (
        <>
            <article className={`${data.type}-area flex flex-column gap-2`} id={`${id}`}>
                <label>{data.label}</label>
                <div className={data.display}>
                    {loading && <div>
                        <Skeleton width="10rem" className="mb-2"></Skeleton>
                        <Skeleton width="5rem" className="mb-2"></Skeleton>
                        <Skeleton width="10rem"></Skeleton>
                    </div>} {!loading && options && options.map((option) => {
                        const option_component = displayOptions[data.display] ?? displayOptions['normal'];
                        return React.createElement(option_component.component, {
                            data: data,
                            option: option,
                            onChange: handleOnChange,
                            key: `${id}-${option.value}`
                        });
                })}
                </div>
            </article>
            
        </>
    );
};
export const FormValidation = (item: ItemConfigType) => {
    console.log("Validation", item);
    return {};
};
export default FormComponent;