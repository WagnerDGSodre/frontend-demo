import { useState } from "react"
import InputComponent from "../components/theme/InputComponent"
import Layout from "../components/theme/Layout"
import { FormMessageType } from "../utils/Enums"
import { signUPSchema } from "../utils/Verifications"

export default function Patient(): JSX.Element {
  const [patient, setPatient] = useState({
    name: '',
    cpf: '',
    email: '',
    birthdate: null,
    address: '',
  })
  const [patientBirsthdate, setPatientBirthDate] = useState('')
  const [messageStatus, setMessageStatus] = useState({
    type: FormMessageType.Pending,
    messages: [],
  })

  function createDate(date: string): Date {
    const dateParts = date.split('/')

    return new Date(`${dateParts[1]}/${dateParts[0]}/${dateParts[2]}`)
  }

  async function postUser(event) {
    event.preventDefault();

    signUPSchema.validate(patient)
      .then(_ => setMessageStatus({ type: FormMessageType.Success, messages: [''] }))
      .catch(err => {
        setMessageStatus({ type: FormMessageType.Fail, messages: err.errors })
      })

    if (messageStatus.type === FormMessageType.Success) {
      // api
    }
  }

  return (
    <Layout title="Cadastro de pacientes">
      <form className={`flex flex-col`} onSubmit={postUser}>
        <div className="flex flex-col">
          <h3 className={`flex items-center justify-center`} >Preencha o formulário abaixo</h3>
          <label className={`flex items-center justify-center`}>Dados pessoais</label>
        </div>

        <div className={`border border-gray-400 m-5 flex flex-col flex-wrap gap-2 grid-cols-12 items-start w-11/12`}>
          {messageStatus.type === FormMessageType.Fail && messageStatus.messages.map(message => 
            <label key={`error_${message}`} className='text-red-400'>{message}</label>)
          }

          <InputComponent
            name="fullName"
            label="Nome Completo"
            placeholder="Nome completo"
            type="text"
            changeValue={value => setPatient({ ...patient, name: value })}
            value={patient.name}
            height={`10`}
            widht={`2/3`}
          />
          <InputComponent
            name="cpf"
            label="CPF"
            placeholder="000.000.000-00"
            mask="999.999.999-99"
            type="text"
            value={patient.cpf}
            changeValue={value => setPatient({ ...patient, cpf: value })}
            height={`10`}
            widht={`1/3`}
          />
          <InputComponent
            name="email"
            label="E-Mail"
            placeholder="email@exemplo.com"
            type="email"
            value={patient.email}
            changeValue={value => setPatient({ ...patient, email: value })}
            height={`10`}
            widht={`1/3`}
          />
          <InputComponent
            name="birthdate"
            label="Data de nascimento"
            placeholder="DD/MM/YYYY"
            mask="99/99/9999"
            type="text"
            value={patientBirsthdate}
            changeValue={value => {
              setPatientBirthDate(value)
              setPatient({ ...patient, birthdate: createDate(value) })
            }}
            height={`10`}
            widht={`1/3`}
          />
          <InputComponent
            name="address"
            label="Endereço"
            placeholder="Rua Exemplo, 123"
            type="text"
            value={patient.address}
            changeValue={value => setPatient({ ...patient, address: value })}
            height={`10`}
            widht={`2/3`}
          />
        </div>

        <div className={`flex gap-2 m-5 grid-cols-12 w-11/12`} >
          <button onClick={postUser} onSubmit={postUser} type="button" className={`w-full border`}>
            Cadastrar
          </button>
        </div>
      </form>

    </Layout>
  )
}