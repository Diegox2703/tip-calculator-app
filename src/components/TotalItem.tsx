interface Props {
    text: string
    value: number
}

export function TotalItem({ text, value }: Props) {
  return (
    <div className="flex justify-between mb-7 items-center">
      <div>
        <p className="font-bold">{ text }t</p>
        <p className="text-[.8125rem] text-Grey-400">/ Person</p>
      </div>                                                 
      <p className="font-bold text-[32px] text-Green-400 md:text-5xl">${ value.toFixed(2) }</p>
    </div>
  )
}