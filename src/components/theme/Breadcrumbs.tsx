import UseContextData from "../../hook/UseContext"

interface propsBread{
    msg:string,
    url?:any
}
export default function Breadcrumbs(props:propsBread){
   
    return(
        <div className={` border border-gray-300 p-4 shadow- shadow-slate-500 flex h-20 w-full items-center justify-center  dark:bg-gradient-to-t dark:from-blue-800  dark:to-blue-800`}>
         <h1 className={`m-10 text-gray-900 dark:text-white text-3xl font-semibold `}>
            {props.msg}
         </h1>
         {props.url}
        
        </div>
    )
}