import UseContextData from "../../hook/UseContext"
import { IconLogout } from "../icons/Icons"
import Breadcrumbs from "./Breadcrumbs"
import DarkMode from "./DarkMode"
import Footer from "./Footer"
import MenuIten from "./MenuIten"
import Sidebar from "./Sidebar"

interface propsLayout {
    title?: string,
    children?: any
}
export default function Layout(props: propsLayout) {
    const { DarkOn, tema } = UseContextData()

    return (
        <div className={`flex ${tema} dark: bg-gradient-t  dark:from-slate-300 dark:to-slate-700 flex-col h-screen`}>
            <div className="flex flex-row flex-grow gap-0">
                <div className={`flex flex-col  bg-gradient-to-t from-gray-200 to-gray-100 gap-0`} >
                    <div className=" w-20 grow">
                        <Sidebar text="Sidebar" ></Sidebar>
                    </div>
                    <div className="  w-20 h-10 mb-10 ">
                        <ul>
                            <MenuIten icon={IconLogout} title="Logout" url='' ></MenuIten>
                        </ul>
                    </div>
                </div>
                <div className={` ${tema} dark:bg-slate-100 flex flex-col flex-grow gap-2`}>
                    <div className="flex flex-col">
                        <Breadcrumbs msg={props.title} />
                        {props.children}
                    </div>
                </div>

            </div>
            <div className=" mt-3 bg-gradient-to-r from-cyan-700 to-cyan-400 flex flex-col  mb-0">
                <div className="  flex items-center justify-center">
                    <div className={`flex`}>
                        <Footer copyrigth="Copyright © 2022 Philips Labs ">
                            <DarkMode tema={tema} alternarTema={DarkOn} />
                        </Footer>

             </div>


                </div>
            </div>



        </div>








    )
}

