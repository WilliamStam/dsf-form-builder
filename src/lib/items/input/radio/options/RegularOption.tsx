import {RadioButton} from "primereact/radiobutton";
import {displayOptionsComponentType} from "../config.ts";

export const RegularOption: displayOptionsComponentType = ({data, option, onChange}) => {
    const id = `${data.type}-${data.id}`;
    return (<>
        <div key={`${id}-${option.value}`} className={`${data.type}-item`}>
            <RadioButton
                inputId={`${id}-${option.value}`}
                name="value"
                value={option.value.toString()}
                onChange={onChange}
                checked={data.value == option.value}
            />
            <label htmlFor={`${id}-${option.value}`} className="ml-2">{option.label}</label>
        </div>
  </>);
};

export default RegularOption;