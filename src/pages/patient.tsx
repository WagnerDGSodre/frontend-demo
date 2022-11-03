
import { useState } from "react"
import InputComponent from "../components/theme/InputComponent"
import Layout from "../components/theme/Layout"

export default function Patient(props) {
    const [name, setName] = useState('')
    const [cpf, setCpf] = useState('')
    const [email, setEmail] = useState('')
    const [endOpt, setOpt] = useState<'comercial'|'residencial'>('residencial')

    function enderecoOption(){
        if(endOpt=='comercial'){
         setOpt(endOpt == 'comercial' ? 'comercial' : 'residencial' )
        }
        setOpt(endOpt == 'residencial' ? 'comercial' : 'residencial' )
        console.log(endOpt)
    }


    return (
        <Layout title="Cadastro de pacientes">
            <div className={`flex flex-col`}>
                <div className="flex flex-col">
                    <h3 className={`flex items-center justify-center`} >Preencha o formulário abaixo</h3>
                    <label className={`flex items-center justify-center`}>Dados pessoais</label>
                </div>
                <div className={`border border-gray-400 m-5 flex flex-wrap gap-2 grid-cols-12 items-center w-11/12`}>                 
                    <InputComponent label="Name" type="text" changeValue={setName} value={name} height={`10`} widht={`2/3`}></InputComponent>
                    <InputComponent label="Cpf" type="text" value={cpf} changeValue={setCpf} height={`10`} widht={`1/3`}></InputComponent>
                    <InputComponent label="Email" type="email" value={email} changeValue={setEmail} height={`10`} widht={`1/3`}></InputComponent>
                </div>


                <div className={`flex w-screen`} >

                    <button onClick={enderecoOption}  className={`w-screen border`}>
                      {endOpt == 'residencial'?'comercial':"comercial" }
                    
                    </button>

                
                <div className={`border border-gray-400 m-5 flex flex-wrap gap-2 grid-cols-12 items-center w-11/12`}>                 
                    <InputComponent label="Endereço"
                     type="text" changeValue={setName}
                      value={name}
                       height={`10`}
                       widht={`2/3`}
                      ></InputComponent>
                   
                </div>
                </div>
            </div>



        </Layout>


    )
}