interface Props {
    text: string,
    reset: () => void
}

export function Button({ text, reset }: Props) {
  return (
    <button onClick={reset} className="bg-Green-400 text-Green-900 uppercase text-center font-bold h-12 w-full rounded-[5px] cursor-pointer hover:bg-Green-200 transition-colors">{ text }</button>      
  )
}
