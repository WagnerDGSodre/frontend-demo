import Link from 'next/link'

interface propsMenu {
    url?: string,
    text: string,
    icon: any,
    className?:string,
    onClick?: (evento: any) => void
}

export default function MenuItem(props: propsMenu) {
            function renderContent() {
                return (
                    <a className={`
                     flex flex-col justify-center w-full h-20 items-center
                     ${props.className}
                     `} >
                        {props.icon}
                        <span className={`text-xs font-thin`} >
                            {props.text}
                        </span>
                    </a>
                )
                 }
    return (
        <li onClick={props.onClick} className={' list-none cursor-pointer hover:bg-gradient-to-t from-blue- to-teal-900  m-2 p-2'} >
        {props.url ? (
            <Link legacyBehavior href={props.url}>
                 {renderContent()}
            </Link>

        ):(
            renderContent()

        )   
      }      

        </li>
        


    )
}