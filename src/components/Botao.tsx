interface BotaoProps {
  cor?: 'green' | 'blue' | "gray"
  children: string
  className?: string
}
export default function botao({ children, cor, className }: BotaoProps) {
  const hasCor = cor ?? 'gray'
  console.log(hasCor);

  return (
    <button className={`
     bg-gradient-to-r from-${hasCor}-400 to-${hasCor}-700
     text-white px-4 py-2 rounded-md  ${className}
    `}>
      {children}
    </button>
  )
}