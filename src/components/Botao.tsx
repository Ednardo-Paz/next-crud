interface BotaoProps {
  cor?: 'green' | 'blue' | "gray"
  children: string
  className?: string
  onClick?: () => void
}
export default function botao({ onClick, children, cor, className }: BotaoProps) {
  const hasCor = cor ?? 'gray'


  return (
    <button onClick={onClick} className={`
     bg-gradient-to-r from-${hasCor}-400 to-${hasCor}-700
     text-white px-4 py-2 rounded-md  ${className}
    `}>
      {children}
    </button>
  )
}