import { IconMoon, IconSun } from "../icons/Icons"

interface propsButton{
    tema:string,
    alternarTema: () => void
}

export default function DarkMode(props:propsButton){
    return props.tema === "dark" ? (
        <div className={`flex rauded-full flex-col cursor-pointer`} 
        onClick={props.alternarTema}>
           {IconMoon}
        </div>
    ): (
        <div className={`flex rauded-full flex-col cursor-pointer`} 
        onClick={props.alternarTema}>
        {IconSun}
        </div>

    )
}