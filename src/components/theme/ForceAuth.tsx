import Image from "next/image"
import Head from "next/head"
import Router from "next/router"
import loader from '../../../public/images/loading.gif'
import useAuth from "../../datas/hook/UseAuth"

export default function ForceAuth(props){

    const {usuario, carregando} = useAuth()

function renderLayout(){
    return(
        <>
        <Head>
            <script
            dangerouslySetInnerHTML={{
                __html:
                `
                 if(!document.cookie?.includes("admin-phLabs")){
                    window.location.href = "/autenticacao"
                 }

                `

            } }
            
            
            /> 
        </Head>
        {props.children}      
        </>
    )
}

function emCarregamento(){
    return(
        <div className={`flex items-center justify-center h-screen`}>
         {<Image src={loader} alt="imagem de loader" />}
        </div>  
       
    )
}
if(!carregando && usuario?.email){
   return renderLayout()
}else if(carregando){
        return emCarregamento()      
}else{
    Router.push('/autenticacao')
   return null
  
}



}