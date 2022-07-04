import Layout from '../components/Layout'
import Tabela from '../components/Tabela'
import Cliente from '../core/Cliente'
import Botao from '../components/Botao'
import Formulario from '../components/Formulario'
import { useEffect, useState } from 'react'
import ClienteRepositorio from '../backend/ClienteRepositorio'
import ColecaoCliente from '../backend/db/ColecaoCliente'


export default function Home() {
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


  return (
    <div className={`
      flex h-screen justify-center items-center
      bg-gradient-to-r from-blue-500 to-purple-500
      text-white
    `}>
      <Layout titulo='Cadastro Simples'>
        {visivel === "tabela" ? (
          <>
            <div className='flex justify-end'>
              <Botao
                onClick={clientenovo}
                cor='green'
                className='mb-4'>
                Novo Cliente
              </Botao>
            </div>
            <Tabela clientes={clientes} clienteSelecionado={clienteSelecionado} clienteExcluido={clienteExcluido} />
          </>
        ) : <Formulario
          cliente={cliente}
          cancelado={() => setVisivel('tabela')}
          clienteMoudou={salvarCliente}
        />}
      </Layout>
    </div>
  )
}
