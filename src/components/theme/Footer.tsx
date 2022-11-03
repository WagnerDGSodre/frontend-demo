interface propsFooter{
    copyrigth:string,
    children?:any
}

export default function Footer(props:propsFooter){
    return(
        <div className={`flex flex-col w-full  items-center justify-center border-zinc-100 divide-y-2 p-8 bg-gradient-t from-gray-900-300 to-gray-600       `}>
            <h3>{props.copyrigth}</h3>
            <div>
                {props.children}
            </div>
        </div>
    )
}