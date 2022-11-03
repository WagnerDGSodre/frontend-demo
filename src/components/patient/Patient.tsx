import styles from '../styles/Grid.module.css'

interface propsGrid{
    nome?: string;
    sobrenome?: string;
    options?:string
    }

export default function Patient(props:propsGrid){
    return(
        <div>
        {props.nome}
        {props.sobrenome}
        {props.options}           
        </div>
    )
}