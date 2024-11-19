import {Checkbox} from "primereact/checkbox";
import {displayOptionsComponentType} from "../config.ts";

export const RegularOption: displayOptionsComponentType = ({data, option, onChange}) => {
    const id = `${data.type}-${data.id}`;
    return (<>
        <div key={`${id}-${option.value}`} className={`${data.type}-item`}>
            <Checkbox
                inputId={`${id}-${option.value}`}
                name="value"
                value={option.value}
                onChange={onChange}
                checked={data.value.includes(option.value)}
            />
            <label htmlFor={`${id}-${option.value}`} className="ml-2">{option.label}</label>
        </div>
  </>);
};

export default RegularOption;