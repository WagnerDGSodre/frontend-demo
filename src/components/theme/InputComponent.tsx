interface inputPropsAuth {
    label: string,
    value: any,
    required?: boolean
    type: 'email' | 'text' | 'password' | 'textarea',
    modeRender?: boolean,
    changeValue?: (newValue: any) => void,
    height: string,
    widht: string
    sm?:string,
    md?:string,
    lg?:string,
    xl?:string,


}


export default function InputComponent(props: inputPropsAuth) {
    return props.modeRender == false ? null :
        (              
               
                    <input
                        placeholder={props.label}
                        type={props.type}
                        value={props.value}
                        required={props.required}
                        onChange={e => props.changeValue?.(e.target.value)}
                        className={`w-${props.widht} h-${props.height}
                        sm:w-${props.sm}  md:w-${props.md} lg:w-${props.lg}  xl:w-${props.xl}
                         p-2 m-2 border-blue-300 bg-slate-100 focus:bg-white `}
                    />
              
           
        )
}