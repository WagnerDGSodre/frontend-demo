interface propsFooter{
    copyright:string,
    children?:any
}


export default function Footer(props:propsFooter){
    return(
        <div className={` my-10 flex flex-col`}>
         {props.copyright}
         {props.children}
        </div>
    )
}