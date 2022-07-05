import { useEffect, useState } from "react"
import ClienteRepositorio from "../backend/ClienteRepositorio"
import ColecaoCliente from "../backend/db/ColecaoCliente"
import Cliente from "../core/Cliente"

export default function useClientes() {

  const repo: ClienteRepositorio = new ColecaoCliente()


  const [visivel, setVisivel] = useState<'tabela' | 'form'>('tabela')
  const [cliente, setCliente] = useState<Cliente>(Cliente.vazio())
  const [clientes, setClientes] = useState<Cliente[]>([])

  useEffect(() => {
    repo.obterTodos().then(setClientes)
  }, [cliente, clientes])

  function clienteSelecionado(cliente: Cliente) {
    setCliente(cliente)
    setVisivel("form")
  }
  function clienteExcluido(cliente: Cliente) {
    repo.excluir(cliente)
  }
  function salvarCliente(cliente: Cliente) {
    repo.savar(cliente)
    setVisivel("tabela")
  }
  function clientenovo() {
    setVisivel("form")
    setCliente(Cliente.vazio())
  }
  return {
    clientes,
    cliente,
    visivel,
    setVisivel,
    salvarCliente,
    clientenovo,
    clienteExcluido,
    clienteSelecionado,
  }
}

