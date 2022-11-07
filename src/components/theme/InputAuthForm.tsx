interface IInputProps {
  label: string,
  value: any,
  required?: boolean
  type: 'email' | 'text' | 'password',
  modeRender?: boolean,
  changeValue?: (newValue: any) => void,
  height: string,
  widht: string
}

type InputProps = JSX.IntrinsicElements['input'] & IInputProps

export default function InputAuthForm(props: InputProps) {
  return props.modeRender === false ? null :
    (
      <div className={`m-4 flex flex-col w-${props.widht}`}>
        <label>{props.label}</label>
        <input
          type={props.type}
          placeholder={props.placeholder}
          value={props.value}
          required={props.required}
          onChange={e => props.changeValue?.(e.target.value)}
          className={`w-${props.widht} h-${props.height} p-2 border-blue-300 bg-slate-200 focus:bg-white `}
        />
      </div>
    )
}