import { useSelector } from "react-redux";
import { formatToCurrency } from "../util/util";

export default function CurrentBalance() {
  const curBalanceAmount = useSelector((state) => state.budget.currentBalance);

  const formattedAmount = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "PHP",
  }).format(curBalanceAmount);

  const formattedAmount1 = formatToCurrency(curBalanceAmount);

  return (
    <div className=" mt-4 mx-4 p-5 rounded-2xl bg-purple-600 text-stone-100">
      <p className=" poppins-regular text-md">Current Balance</p>
      <h2 className="poppins-bold font-bold text-4xl mt-3">
        {formattedAmount}
      </h2>
    </div>
  );
}
