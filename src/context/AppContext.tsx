import { createContext, useState } from "react";

type Tema = 'dark' | ''

interface propsAppContext{
    tema?: Tema,
    DarkOn?: () => void
}

const AppContext = createContext<propsAppContext>({});

export function AppProvider(props){

const [tema, setTema] = useState<Tema>('')
function DarkOn(){
       setTema(tema === '' ? 'dark' : '' )
}

    return(
        <AppContext.Provider value={{
            tema,
            DarkOn

        }}>
         {props.children}   
        </AppContext.Provider>
    )
}

export default AppContext;