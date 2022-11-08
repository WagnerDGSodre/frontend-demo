/*
import createContext
use uma const AppContext recebendo o createContext
export uma funcao AppProvider returnando apartir de AppContext.provider
o provider deve receber props.children
*/
import { createContext, useState, useEffect } from "react";


interface propsAppContext{
    tema?:string,
    DarkOn?: () => void

}

const AppContext = createContext<propsAppContext>({})

export function AppProvider(props){

 const [tema, setTema] = useState("dark")
 function DarkOn() {
    const temaSet = tema === '' ? 'dark':''
    setTema(temaSet)
    localStorage.setItem('tema',temaSet)
 } 

useEffect(() => {
  const temaGuard = localStorage.getItem('tema')
  setTema(temaGuard)
},[])
 

    return (
   <AppContext.Provider value={{
    tema,
    DarkOn
   }}>
    {props.children}
   </AppContext.Provider>
    )
}

export default AppContext