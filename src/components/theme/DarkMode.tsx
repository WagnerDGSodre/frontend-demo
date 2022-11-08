import { iconMoon, iconSum } from "../icons"

interface propsButton {
    tema: string,
    alternarTema: () => void,
    className?:string
}

export default function DarkMode(props: propsButton) {
    return props.tema === "dark" ? (
        <div className={` ${props.className} mb-1 p-1 rounded-full flex cursor-pointer  border-solid border-2 border-indigo-200
        items-center justify-center`} onClick={props.alternarTema}>
        <label className="mr-3">Escuro</label>    
        {iconMoon}
        
            
        </div>


    ) : (
        <div className={` mb-1 p-1  rounded-full flex cursor-pointer border-solid border-2 border-gray-700
        items-center justify-center`} onClick={props.alternarTema}>
        {iconSum}
        <label className="mr-3">Claro</label>
        
        
        </div>

    )
}