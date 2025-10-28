import { useEffect, useState } from "react"

interface Props {
    label: string
    value: number
    iconUrl: string
    setValue: (value: number) => void
    variant: 'bill' | 'people'
}

export function Input({ label, value, iconUrl, variant, setValue }: Props) {
  const [localValue, setLocalValue] = useState(value.toString())
  const [error, setError] = useState(false)

  useEffect(() => {
    setLocalValue(value.toString())
  }, [value])

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const userInput = e.target.value
    const numberRegExp = /^\d*$/
    const decimalRegExp = /^\d*\.?\d*$/

    const regExp = variant === 'bill' ? decimalRegExp : numberRegExp

    const isValid = regExp.test(userInput)

    if (!isValid) return

    setLocalValue(userInput)

    if (userInput === '0' || userInput.trim() === '') return setError(true)

    setError(false)
    setValue(Number(userInput))
  }

  return (
    <div className="flex flex-col mb-8">
      <div className="flex justify-between">
        <label 
            className="font-bold text-Grey-500 mb-2" 
            htmlFor="bill"
        >
            { label }
        </label>
        {
          error && <p className="text-Orange-400 font-bold">Can't be zero</p>
        }
      </div>
      <div className="relative">
        <input 
            id="bill" 
            className={`bg-Grey-50 rounded-[5px] cursor-pointer h-12 text-right pr-4 text-2xl text-Green-900 w-full ${error ? 'focus:outline-Orange-400' : 'focus:outline-Green-400'}`}
            type="text" 
            value={localValue}
            onChange={handleOnChange}
        />
        <img className="absolute top-4 left-2" src={iconUrl} alt="icon"/>
      </div>
    </div>
  )
}