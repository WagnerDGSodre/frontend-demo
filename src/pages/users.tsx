import Layout from "../components/theme/Layout";
import { useState } from "react";
import {usePacienteService} from '../app/services/paciente.service'
import { InputComponent } from "../components/theme/Input";
import { Paciente } from "../app/models/patients";



export default function Users() {
  const service = usePacienteService()
  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [cpf, setCpf] = useState('')
  const [bairro, setBairro] = useState('')
  const [cep, setCep] = useState('')
  const [cidadeId, setCidadeId] = useState(null)
  const [complemento, setcomplemento] = useState('')
  const [logradouro, setLogradouro] = useState('')
  const [numero, setNumero] = useState('')


  const submter = () => {
    const paciente: Paciente = {
      nome,
      cpf,
      email,
      bairro,
      cep,
      cidadeId,
      complemento,
      logradouro,
      numero
    }

    console.log(paciente)

    service.salvar(paciente).then(paciente => console.log(paciente))
    //service.find().then(p => console.log(p.nome))
  
  }




  return (
    <Layout title="Pacientes" >

      <div className="flex flex-col m-20 rounded border">
        <h1 className="flex m-8">Cadastro </h1>
        <div className="flex flex-row" >
          <InputComponent
            type="text" onChange={setNome}
            className=" m-1  block w-6/12  rounded-md  border-gray-300
            shadow-sm  focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50
          " placeholder="Nome"
          />
          <InputComponent
            type="text" onChange={setCpf}
            className=" m-1  block w-1/12  rounded-md  border-gray-300
            shadow-sm  focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50
          " placeholder="CPF"
          />
          <InputComponent
            type="email" onChange={setEmail}
            className=" m-1  block w-5/12  rounded-md  border-gray-300
            shadow-sm  focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50
          " placeholder="exemplo@philips.com"
          />
        </div>
        <div className="flex flex-row" >
          <InputComponent
            type="text" onChange={setLogradouro}
            className=" m-1  block w-5/12  rounded-md  border-gray-300
            shadow-sm  focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50
          " placeholder="Logradouro"
          />
          <InputComponent
            type="text" onChange={setNumero}
            className=" m-1  block w-1/12  rounded-md  border-gray-300
            shadow-sm  focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50
          " placeholder="numero"
          />
          <InputComponent
            type="text" onChange={setBairro}
            className=" m-1  block w-3/12  rounded-md  border-gray-300
            shadow-sm  focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50
          " placeholder="Bairro"
          />          
           <InputComponent
            type="text" onChange={setCidadeId}
            className=" m-1  block w-3/12  rounded-md  border-gray-300
            shadow-sm  focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50
          " placeholder="Cidade"
          />

          <InputComponent
            type="email" onChange={setCep}
            className=" m-1  block w-1/12  rounded-md  border-gray-300
            shadow-sm  focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50
          " placeholder="cep"
          />
        </div>
        <div className="flex flex-row" >
          <InputComponent
            type="text" onChange={setcomplemento}
            className=" m-1  block w-12/12  rounded-md  border-gray-300
            shadow-sm  focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50
          " placeholder="Complemento"
          />
          
          </div>

        <div className="flex flex-row" >
          <button onClick={submter} className="h-10 w-auto text-white p-2 rounded bg-blue-900">
            Salvar
          </button>

        </div>

      </div>


    </Layout>

  )
}
