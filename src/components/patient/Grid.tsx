
import styles from  '../styles/Grid.module.css';
import Link from 'next/link'

interface propsGrid{
   title:string,
   url?: string,
   children?:any,
   icon?:any
}

export default function Grid(props:propsGrid){
    return(
        <Link href={props.url} legacyBehavior>
        <div className={`
        text-gray-600 text-opacity-70 text-4xl rounded-3xl 
        flex flex-col justify-center items-center leading-6 bg-blue-300 divide-y-4
        m-20 h-3/6 w-3/6 hover:bg-slate-500 hover:text-white  `}>         
           
           <div className={`m-4`}>
           {props.icon}  
            </div>
            <div className={`m-4`}>
            {props.title} 
            </div> 
                   
            <p>
                {props.children}
            
             </p>  
        </div> 
           </Link>  
        )
}