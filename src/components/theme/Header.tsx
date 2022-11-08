import useContextData from "../../datas/hook/UseContext";
import Avatar from "./Avatar";
import DarkMode from "./DarkMode";
import Title from "./Title";

interface propsHeader{
    title:string,
    subtitle:string,
   }

export default function Header(props: propsHeader){
const {DarkOn,tema} = useContextData()

    return(
        <div className={`flex my-0 p-2 w-full`}>
          <Title title={props.title} 
          subtitle={props.subtitle}></Title>
          <div className={`flex flex-grow items-center justify-end`}>
          <DarkMode alternarTema={DarkOn} tema={tema} className="dark:text-white" />
          <Avatar className="ml-4"/>
          </div>           
        </div>
    )
}

