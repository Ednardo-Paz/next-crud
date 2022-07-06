import Layout from '../components/Layout'
import Tabela from '../components/Tabela'
import Botao from '../components/Botao'
import Formulario from '../components/Formulario'
import useClientes from '../hooks/useClientes'


export default function Home() {
  const { clienteExcluido, clienteSelecionado, clientenovo, salvarCliente, cliente, setVisivel, visivel, clientes } = useClientes()


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
