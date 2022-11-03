/* eslint-disable @next/next/no-img-element */
import Link from  "next/link"

interface propsHeader{
    url?:any,
    with:number,
    height?:string
    href:string
  }
  
  export default function Logo(props:propsHeader){
      return(
          <div className={`flex flex-col `}>
            <Link href={props.href}>
           <img src={props.url}  
           alt="Logo Philips"
           className={`flex item-center justify-center w-${props.with} h-${props.height?props.height:props.with} `}
           />
            </Link>  
           </div>        
         
      )
  }