interface inputProps{
    id?:string,
    value?:string,
    type?:string,
    label?:string,
    onChange?:(value) => void,
    className?:any,
    placeholder?:string

}

export const InputComponent:React.FC<inputProps> = ({
onChange,
value,
className,
type,
id,
placeholder,
...inputProps
}:inputProps) => {
    return (
        <input id={id} value={value} type={type} {...inputProps}
        onChange={event => {
            if(onChange) {
                onChange(event.target.value)
            }
        }}
        className={` p-2 m-4 w-full block rounded-md ${className}  border-gray-300
        shadow-sm    focus:border-indigo-300 
        focus:ring focus:ring-indigo-200 focus:ring-opacity-50`}
        placeholder={placeholder}
        ></input>

    
    )
}