import Total from "./total";
import { useSelector } from "react-redux";
import { formatToCurrency } from "../util/util";
import { getTotalDeposit, getTotalWithdrawal } from "../util/budgetUtil";
import { NavLink } from "react-router";

export default function Totals() {
  const movements = useSelector((state) => state.budget.movements);
  const totalDeposit = getTotalDeposit(movements);
  const totalWithdrawal = getTotalWithdrawal(movements);

  const formattedDeposit = formatToCurrency(totalDeposit);
  const formattedWithdrawal = formatToCurrency(totalWithdrawal);

  return (
    <div className="bg-purple-600 text-stone-100 p-4 mx-4 mt-6 rounded-2xl">
      <div className="grid grid-cols-2 justify-between mb-3">
        <Total name="Total Deposit" amount={formattedDeposit} />
        <Total name="Total Withdrawal" amount={formattedWithdrawal} />
      </div>

      <NavLink className="font-medium underline" to="/dashboard">
        DashBoard
      </NavLink>
    </div>
  );
}
