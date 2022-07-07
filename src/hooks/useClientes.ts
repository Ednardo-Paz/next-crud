import { async } from "@firebase/util"
import { useEffect, useState } from "react"
import ClienteRepositorio from "../backend/ClienteRepositorio"
import ColecaoCliente from "../backend/db/ColecaoCliente"
import Cliente from "../core/Cliente"

export default function useClientes() {

  const repo: ClienteRepositorio = new ColecaoCliente()


  const [visivel, setVisivel] = useState<'tabela' | 'form'>('tabela')
  const [cliente, setCliente] = useState<Cliente>(Cliente.vazio())
  const [clientes, setClientes] = useState<Cliente[]>([])
  const [carregando, setCarregando] = useState(false)

  useEffect(() => {
    obterTodos()
  }, [])


  function obterTodos() {
    setCarregando(true)
    repo.obterTodos().then(resp => {
      setClientes
      setCarregando(false)
    })
  }


  function clienteSelecionado(cliente: Cliente) {
    setCliente(cliente)
    setVisivel("form")
  }
  function clienteExcluido(cliente: Cliente) {
    repo.excluir(cliente)
    obterTodos()
  }
  async function salvarCliente(cliente: Cliente) {
    await repo.savar(cliente)
    setVisivel("tabela")
    obterTodos()
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
    carregando,
  }
}

