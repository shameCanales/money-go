import { useSelector } from "react-redux";
import { formatToCurrency } from "../util/util";
import { getCurrentBalance } from "../util/budgetUtil";

export default function CurrentBalance() {
  const movements = useSelector((state) => state.budget.movements);
  const currentBalance = getCurrentBalance(movements);

  const formattedAmount = formatToCurrency(currentBalance);

  return (
    <div className=" mt-4 mx-4 p-5 rounded-2xl bg-purple-600 text-stone-100">
      <p className=" poppins-regular text-md">Current Balance</p>
      <h2 className="poppins-bold font-bold text-4xl mt-3">
        {formattedAmount}
      </h2>
    </div>
  );
}
