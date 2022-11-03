import UseContextData from "../../hook/UseContext"

interface propsBread{
    msg:string,
    url?:any
}
export default function Breadcrumbs(props:propsBread){
   
    return(
        <div className={` 
        shadow- shadow-slate-500 flex h-20 w-full items-center justify-center  
        bg-gradient-to-r from-cyan-700 to-cyan-400`}>
         <h1 className={` text-white text-3xl font-semibold`}>
            {props.msg}
         </h1>
         {props.url}
        
        </div>
    )
}