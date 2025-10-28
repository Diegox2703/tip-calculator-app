import { TotalItem, Button } from "../components";
import useCalculatorStore from "../store/calculator.store";

export function Totals() {
  const store  =useCalculatorStore()

  return (
    <div className="bg-Green-900 rounded-[15px] py-6 text-white px-8 lg:w-[413px] lg:flex lg:flex-col lg:justify-between">
      <div>
        <TotalItem text="Tip Amount" value={store.tipAmount()}/>
        <TotalItem text="Total" value={store.total()}/>
      </div>
      <Button reset={store.reset} text="Reset"/>
    </div>
  )
}
