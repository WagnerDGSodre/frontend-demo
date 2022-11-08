

interface propsContent{
    children?:any
    
   }

export default function Content(props: propsContent){
    return(
        <div className={`
        flex flex-col mt-3
        
        `}>
            {props.children}  
                
         
        </div>
    )
}