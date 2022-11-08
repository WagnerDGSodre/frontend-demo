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
  return (
    <aside className={`
         flex item-center justify-center 
         border-solid bg-gradient-to-t from-gray-200 to-gray-100  flex-col  border-gray-300`}>
      <Logo
        url="https://tse4.mm.bing.net/th/id/OIP.xwK7v6YtE8CT3Oz88y2VgwHaHa?w=177&h=180&c=7&r=0&o=5&pid=1.7"
        with={40}
        height={`auto`}
        href="https://www.philips.com.br/healthcare/resources/landing/solucao-tasy"
      />

      <ul>
        <MenuIten icon={IconHome} title="Home" url='/'></MenuIten>
        <MenuIten icon={IconAdd} title="Cadastro" url='patient'></MenuIten>
        <MenuIten icon={IconUsers} title="Pesquisa" url='search/'></MenuIten>
      </ul>

    </aside>
  )
}