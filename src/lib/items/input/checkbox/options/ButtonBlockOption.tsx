import {displayOptionsComponentType} from "../config.ts";

export const ButtonBlockOption: displayOptionsComponentType = ({data, option, onChange}) => {
    
    const id = `${data.type}-${data.id}`;
    return (<>
        <div key={`${id}-${option.value}`} className={`${data.type}-item`}>
            <input
                id={`${id}-${option.value}`}
                type="checkbox"
                onChange={onChange}
                value={option.value.toString()}
                checked={data.value.includes(option.value.toString())}
            />
            <label htmlFor={`${id}-${option.value}`}>{option.label}</label>
        </div>
  </>);
};

export default ButtonBlockOption;