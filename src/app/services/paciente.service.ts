import { Paciente } from './../models/patients/index';
import  { AxiosInstance, AxiosResponse } from 'axios';
import httpClient from '../http'


//const resourceURL: string = "pacientes"
const resourceURL: string = "/pacientes"

export const usePacienteService = () => {

    const Insert = async (paciente: Paciente) : Promise<Paciente> => {
       const response: AxiosResponse<Paciente> = await httpClient.post<Paciente>(resourceURL, paciente )
       return response.data;
    }

    const Update = async (paciente: Paciente): Promise<void> =>{
        const url: string = `${resourceURL}/${paciente.id}`
        await httpClient.put<Paciente>(url,paciente) 
    }

    const FindId = async (): Promise<Paciente> =>{
        const response: AxiosResponse<Paciente> = await httpClient.get(resourceURL)
        return response.data
    }   

    const FindAll = async () : Promise<Paciente> => {
        const response: AxiosResponse<Paciente> = await httpClient.get(resourceURL)
        return response.data;
    } 

    const Delete = async (id): Promise<void> => {
        const url: string = `${resourceURL}/${id}`
        await httpClient.delete(url) 
    }   


    return {
        Insert,
        Update,
        FindId,
        FindAll,
        Delete
    }
}