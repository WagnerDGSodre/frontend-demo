import Link from "next/link"

interface propsMenuIten{
    title:string,
    url?:string,
    icon?:any
}

export default function MenuIten(props:propsMenuIten){
    return(
        <Link href={props.url} legacyBehavior>
        <li className={`cursor-pointer dark:text-white dark:bg-gradient-to-t dark:from-blue-600  dark:to-blue-600 mr-3  mt-0 p-6 flex flex-col items-center w-full
        h-xs hover:bg-slate-200`}>
            {props.icon}
            {props.title} 

              
        </li>
        </Link>
    )
}