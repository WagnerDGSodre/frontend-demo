import UseContextData from "../../hook/UseContext"
import Breadcrumbs from "./Breadcrumbs"

interface propsHeader{
  title?:string,
  children?:any
}

export default function Header(props:propsHeader){
 
    return(
        <div className={` mt-0
         flex flex-row h-20 w-8/12 bg-gradient-to-r from-blue-500 to-blue-400`}>
         <Breadcrumbs  msg="Bem - vindo(a) ao sistema" />
         {props.children}
      
         
         </div>        
       
    )
}