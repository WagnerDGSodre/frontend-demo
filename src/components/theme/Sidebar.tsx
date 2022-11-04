import Link from "next/link"
import { IconUtils } from "primereact"
import UseContextData from "../../hook/UseContext"
import { IconAdd, IconHome, IconUsers } from "../icons/Icons"
import Logo from "./Logo"
import MenuIten from "./MenuIten"

interface propsSidebar {
    text: string,
    children?: any
}

export default function Sidebar(props: propsSidebar) {
    const { DarkOn, tema } = UseContextData()
    return (
        <aside className={` h-full
         flex item-center dark:text-white dark:bg-gradient-to-t dark:from-blue-600  dark:to-blue-600 
         border-solid   flex-col  border-gray-300`}>
           <div className={`h-full p-2`}>
           <Logo
           mode={tema}
           url="https://www.philips.com.br/c-etc/philips/clientlibs/foundation-general/clientlibs-css-rb2014/images/generic/philips-footer-logo.svg"
           urlDark="https://philips.vtexassets.com/arquivos/trop-logo-footer.png"
           with={60}
            height={'h-80'}
            href="https://www.philips.com.br/healthcare/resources/landing/solucao-tasy"
            />

           </div>
           
            <ul>
                <MenuIten icon={IconHome} title="Home" url='/'></MenuIten>
                <MenuIten icon={IconAdd} title="Cadastro" url='patient'></MenuIten>
                <MenuIten icon={IconUsers} title="Pesquisa" url='search/'></MenuIten>
            </ul>
        </aside>
    )
}