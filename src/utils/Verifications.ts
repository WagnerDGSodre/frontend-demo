import * as yup from 'yup'
import { Messages } from './Constants'

const nameRegex = /^[a-zA-Z/\s]+$/
const cpfRegex = /([0-9]{2}[\.]?[0-9]{3}[\.]?[0-9]{3}[\/]?[0-9]{4}[-]?[0-9]{2})|([0-9]{3}[\.]?[0-9]{3}[\.]?[0-9]{3}[-]?[0-9]{2})/
const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/

export function isHTML(data: string): boolean {
  return /<\/?[a-z][\s\S]*>/i.test(data)
}

export const signUPSchema = yup.object().shape({
  fullName: yup.string().matches(nameRegex, Messages.WrongName).required(`Nome ${Messages.RequiredField}`),
  cpf: yup.string().matches(cpfRegex, Messages.WrongEmail).required(`CPF ${Messages.RequiredField}`),
  email: yup.string().email(Messages.WrongEmail).required(`E-mail ${Messages.RequiredField}`),
  birthdate: yup.date().max(new Date(), Messages.WrongBirthdateMax).required(`Data de nascimento ${Messages.RequiredField}`),
  address: yup.string().required(`Endereço ${Messages.RequiredField}`),
})

export const signINSchema = yup.object().shape({
  email: yup.string().email(Messages.WrongEmail).required(`E-mail ${Messages.RequiredField}`),
  password: yup.string().min(8, Messages.WrongPassword).matches(passwordRegex, Messages.WrongPassword).required(`Senha ${Messages.RequiredField}`),
})