import { useState } from "react"
import useCalculatorStore from "../store/calculator.store"

export function CustomButton() {
  const [isEditable, setIsEditable] = useState(false)
  const [inputValue, setInputValue] = useState('')
  const [buttonLabel, setButtonLabel] = useState('Custom')
  const store = useCalculatorStore()

  const handleClick = () => {
    setIsEditable(true)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const currentValue = e.target.value
    const decimalRegExp = /^\d*\.?\d*$/

    const isValid = decimalRegExp.test(currentValue)

    if (!isValid) return

    setInputValue(currentValue)
  }

  const handleBlur = (e: React.FocusEvent<HTMLInputElement, Element>) => {
    setNewValue(e.currentTarget.value)
  }

  const handleEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') setNewValue(e.currentTarget.value)
  }

  const setNewValue = (newValue: string) => {
    store.setTip(Number(newValue))
    setIsEditable(false)
    setButtonLabel(`${newValue}%`)
  }

  return (
    <>
        {
            isEditable ? (
                <input 
                    type="text" className="focus:outline-Green-400 p-2 text-right caret-Green-400 text-Green-900 font-bold text-2xl"
                    onChange={(handleChange)}
                    onKeyDown={handleEnter}
                    onBlur={handleBlur}
                    autoFocus
                    value={inputValue}
                />
            ) : (
                <button 
                    className="text-2xl font-bold h-12 bg-Grey-200 rounded-[5px] cursor-pointer hover:bg-Grey-50 text-Grey-500 hover:text-Grey-400"
                    onClick={handleClick}
                >
                    {buttonLabel}
                </button>      
            )
        }
    </>
  )
}
