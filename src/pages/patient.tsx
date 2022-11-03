import { useState } from "react"
import InputComponent from "../components/theme/InputComponent"
import Layout from "../components/theme/Layout"

export default function Patient(props) {
  const [endOpt, setOpt] = useState<'comercial' | 'residencial'>('residencial')
  const [numberOfAddresses, setNumberOfAddresses] = useState(1)
  const [patient, setPatient] = useState({
    name: '',
    cpf: '',
    email: '',
    birthdate: '',
    address: [],
  })

  function enderecoOption() {
    setOpt(endOpt === 'residencial' ? 'comercial' : 'residencial')
    console.log(endOpt)
  }

  console.log('patient ->', patient)


  return (
    <Layout title="Cadastro de pacientes">
      <div className={`flex flex-col`}>
        <div className="flex flex-col">
          <h3 className={`flex items-center justify-center`} >Preencha o formulário abaixo</h3>
          <label className={`flex items-center justify-center`}>Dados pessoais</label>
        </div>

        <div className={`border border-gray-400 m-5 flex flex-col flex-wrap gap-2 grid-cols-12 items-start w-11/12`}>
          <InputComponent
            label="Nome Completo"
            placeholder="Nome completo"
            type="text"
            changeValue={value => setPatient({ ...patient, name: value })}
            value={patient.name}
            height={`10`}
            widht={`2/3`}
          />
          <InputComponent
            label="CPF"
            placeholder="000.000.000-00"
            type="text"
            value={patient.cpf}
            changeValue={value => setPatient({ ...patient, cpf: value })}
            height={`10`}
            widht={`1/3`}
          />
          <InputComponent
            label="E-Mail"
            placeholder="email@exemplo.com"
            type="email"
            value={patient.email}
            changeValue={value => setPatient({ ...patient, email: value })}
            height={`10`}
            widht={`1/3`}
          />
          <InputComponent
            label="Data de nascimento"
            placeholder="DD/MM/YYYY, DD-MM-YYYY"
            type="text"
            value={patient.birthdate}
            changeValue={value => setPatient({ ...patient, birthdate: value })}
            height={`10`}
            widht={`1/3`}
          />

          {Array(numberOfAddresses).map(number => 
            <InputComponent
              key={`address-${number}`}
              label={`Endereço ${number}`}
              placeholder="Rua Exemplo, 123"
              type="text"
              value={patient.address[number]}
              changeValue={value => {
                patient.address[number] = value
              }}
              height={`10`}
              widht={`2/3`}
            />
          )}
        </div>

        <div className={`flex gap-2 m-5 grid-cols-12 w-11/12`} >
          <button onClick={enderecoOption} className={`w-full border`}>
            {endOpt === 'residencial' ? 'comercial' : "comercial"}
          </button>
        </div>
      </div>

    </Layout>
  )
}