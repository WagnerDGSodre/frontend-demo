import * as yup from 'yup'
import { Messages } from './Constants'

const nameRegex = /^[a-zA-Z/\s]+$/
const cpfRegex = /([0-9]{2}[\.]?[0-9]{3}[\.]?[0-9]{3}[\/]?[0-9]{4}[-]?[0-9]{2})|([0-9]{3}[\.]?[0-9]{3}[\.]?[0-9]{3}[-]?[0-9]{2})/
const birthdateRegex = /^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/

export function isHTML(data: string): boolean {
  return /<\/?[a-z][\s\S]*>/i.test(data)
}

export const signUPSchema = yup.object().shape({
  fullName: yup.string().matches(nameRegex, Messages.WrongName).required(),
  email: yup.string().email(Messages.WrongEmail).required(),
  cpf: yup.string().matches(cpfRegex, Messages.WrongEmail).required(),
  birthdate: yup.string().matches(birthdateRegex, Messages.WrongBirthdate).required(),
  address: yup.string().required(),
})