import Total from "./total";
import { useSelector } from "react-redux";
import { formatToCurrency } from "../util/util";

export default function Totals() {
  const totalDeposit = useSelector((state) => state.budget.totalDeposit);
  const totalWithdrawal = useSelector((state) => state.budget.totalWithdrawal);

  const formattedDeposit = formatToCurrency(totalDeposit);
  const formattedWithdrawal = formatToCurrency(totalWithdrawal);

  return (
    <div className="bg-purple-600 text-stone-100 p-4 mx-4 mt-6 rounded-2xl">
      <div className="grid grid-cols-2 justify-between mb-3">
        <Total name="Total Deposit" amount={formattedDeposit} />
        <Total name="Total Withdrawal" amount={formattedWithdrawal} />
      </div>

      <a className="font-medium underline">DashBoard</a>
    </div>
  );
}
