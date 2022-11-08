import { Paciente } from './../models/patients/index';
import { AxiosResponse } from 'axios';
import httpClient from '../http'


//const resourceURL: string = "/api/paciente"
const resourceURL: string = "/pacientes"

export const usePacienteService = () => {

    const salvar = async (paciente: Paciente) : Promise<Paciente> => {
       const response: AxiosResponse<Paciente> = await httpClient.post<Paciente>(resourceURL, paciente )
       return response.data;
    }

    const find = async () : Promise<Paciente> => {
        const response: AxiosResponse<Paciente> = await httpClient.get(resourceURL)
        return response.data;
    }   



    return {
        salvar,
        find
    }
}