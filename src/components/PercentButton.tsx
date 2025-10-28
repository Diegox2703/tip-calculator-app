import useCalculatorStore from "../store/calculator.store"

interface Props {
    percent: number
    isCustom?: boolean
}

export function PercentButton({ percent, isCustom = false }: Props) {
  const store = useCalculatorStore()
  const isActive = store.tip === percent

  const handleClick = () => {
    store.setTip(percent)
  }
  
  return (
    <button 
      className={`transition-colors text-2xl font-bold rounded-[5px] w-full h-12 cursor-pointer ${isActive ? 'bg-Green-200 text-Grey-500 hover:bg-Grey-50' : 'text-Grey-50 bg-Green-900 hover:bg-Green-200 hover:text-Green-900'}`}
      onClick={handleClick}
    >
        {
          isCustom ? 'Custom' : `${percent}%`
        }
    </button>
  )
}
