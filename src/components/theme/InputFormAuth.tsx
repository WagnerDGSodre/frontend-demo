
interface propsFormAuth {
    label: string,
    value: any,
    required?: boolean,
    type: 'text' | 'email' | 'password',
    modeRender?: boolean,
    changeValue: (newValue: any) => void
}

type type = "text" | "password"

export default function InputFormAuth(props: propsFormAuth) {
    return props.modeRender == false  ? null : (
        <div className={`flex flex-col  rounded-xl`}>
            <label>{props.label}</label>
            <input
                type={props.type}
                value={props.value}
                onChange={e => props.changeValue?.(e.target.value)}
                required={props.required}
                className={`w-full h-10 my-3 px-4
                  focus:border-gray-300 bg-slate-200
                   focus:bg-white focus:outline-none
                   `}
            />       
        </div>
    )
}