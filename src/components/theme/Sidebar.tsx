import { iconAdd, iconHome, iconLogout, iconUsers, logoIcon } from "../icons"
import Router from "next/router"
import Link from "next/link"

import Logo from "./Logo"
import useContextData from "../../datas/hook/UseContext"
import useAuth from "../../datas/hook/UseAuth"
import MenuItem from "./MenuItem"


export default function Sidebar(){
  const {logout} = useAuth()
  const { DarkOn, tema } = useContextData()
     return(
      <aside className={` h-full ${tema}
      flex item-center dark:text-white dark:bg-gradient-to-t dark:from-blue-600  dark:to-blue-600 
      border-solid   flex-col  border-gray-300`}>
        <div className={`p-2`}>
        <Logo
        mode={tema}
        url="https://www.philips.com.br/c-etc/philips/clientlibs/foundation-general/clientlibs-css-rb2014/images/generic/philips-footer-logo.svg"
        urlDark="https://philips.vtexassets.com/arquivos/trop-logo-footer.png"
        with={60}
         height={'h-80'}
         href="https://www.philips.com.br/healthcare/resources/landing/solucao-tasy"
         />

        </div>
          <ul className={`h-full flex-grow`}>            
          <MenuItem url="/" text="Home" icon={iconHome} ></MenuItem>
          <MenuItem url="/cadastro" text="Cadastro" icon={iconAdd} ></MenuItem>
          <MenuItem url="/users" text="Patiets" icon={iconUsers} ></MenuItem>
          </ul>

          <u>
            <MenuItem onClick={()=> logout()} icon={iconLogout}
             text="logout"/>
          </u>


        </aside>
    )
}