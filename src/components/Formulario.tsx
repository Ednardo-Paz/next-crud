import { useState } from "react";
import Cliente from "../core/cliente";
import Entrada from "./Entrada";
import Botao from './Botao'
interface FormularioProps {
  cliente: Cliente
  clienteMoudou?: (cliente: Cliente) => void
  cancelado?: () => void
}
export default function Formulario(props: FormularioProps) {
  const [nome, setNome] = useState(props.cliente?.nome ?? '')
  const [idade, setIdade] = useState(props.cliente?.idade ?? 0)

  const id = props.cliente?.id
  return (
    <div>
      {id ? (
        <Entrada className="mb-5" texto="Código" valor={id} somenteLeitura tipo="text" />
      ) : false}
      <Entrada className="mb-5"
        texto="Nome"
        onChange={setNome}
        valor={nome}
        somenteLeitura={false}
        tipo="text"
      />
      <Entrada
        className="mb-5"
        texto="Idade"
        valor={idade}
        onChange={setIdade}
        somenteLeitura={false}
        tipo="number"
      />
      <div className="flex justify-end mt-7">
        <Botao cor="blue" className="mr-2" onClick={() => props.clienteMoudou?.(new Cliente(nome, +idade, id))}>
          {id ? "Alterar" : "Salvar"}
        </Botao>
        <Botao cor="gray" onClick={props.cancelado}>
          Cancelar
        </Botao>
      </div>
    </div>
  )
}