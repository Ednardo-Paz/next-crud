
import Layout from '../components/Layout'
import Tabela from '../components/Tabela'
import Cliente from '../core/cliente'
import Botao from '../components/Botao'
import Formulario from '../components/Formulario'
import { useState } from 'react'

export default function Home() {
  const [visivel, setVisivel] = useState<'tabela' | 'form'>('tabela')
  const [cliente, setCliente] = useState<Cliente>(Cliente.vazio())
  const clientes = [
    new Cliente("Ana", 34, "1"),
    new Cliente("Bia", 45, "2"),
    new Cliente("Carlos", 23, "3"),
    new Cliente("Pedro", 54, "4"),
  ]
  function clienteSelecionado(cliente: Cliente) {
    setCliente(cliente)
    setVisivel("form")
  }
  function clienteExcluido(cliente: Cliente) {
    console.log(`Excluir...${cliente.nome}`);
  }
  function salvarCliente(cliente: Cliente) {
    console.log(cliente);
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
