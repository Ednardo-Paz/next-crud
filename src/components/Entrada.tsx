interface EntradaProps {
  texto: string
  tipo?: 'text' | 'number'
  valor: any
  somenteLeitura?: boolean
  onChange?: (valor: any) => void
  className?: string
}
export default function Entrada(props: EntradaProps) {
  return (
    <div className={`flex flex-col ${props.className} `}>
      <label className="mb-2">
        {props.texto}
      </label>
      <input onChange={e => props.onChange?.(e.target.value)} readOnly={props.somenteLeitura} value={props.valor} type={props.tipo ?? 'text'} className={`
        border border-purple-500 rounded-lg focus:outline-none bg-gray-100 px-4 py-2 ${props.somenteLeitura ? ' ' : "focus:bg-white"}
      `} />
    </div>
  )
}