
interface propsPanel{
    text?:string,
    options?:any,
    children?:any
}

export default function Panel(props:propsPanel){
return(
    <div className={`flex items-center justify-center py-9  m-2  border-r-2 text-white  
    `}>          
        {props.text}    
        {props.children}
            
        </div>       
        
   )
}