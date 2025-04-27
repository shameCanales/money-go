import binImg from "../assets/trash.png";
import editImg from "../assets/edit.png";
import { useDispatch } from "react-redux";
import { budgetActions } from "../store/budget-slice";
import uiSlice from "../store/ui-slice";

export default function MovementItem({ id, date, type, desc, amount, time }) {
  const dispatch = useDispatch();
  const indicator = type === "deposit" ? "bg-green-500" : "bg-red-600";
  const formattedAmount = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "PHP",
  }).format(amount);
  const formattedType = type.charAt(0).toUpperCase() + type.slice(1);

  function handleDeleteMovement() {
    dispatch(budgetActions.removeMovement(id));
  }

  function handleEditMovement() {
    dispatch(uiSlice.actions.openEditModal(id));
  }

  return (
    <div className="overflow-hidden relative border-2 p-4 mt-4 rounded-2xl flex items-center justify-between">
      <div className="pl-4">
        <div className="flex items-center">
          <div className={`w-3 h-3 rounded-full  ${indicator}`}></div>
          <p className="ml-2">{formattedType}</p>
        </div>
        <p>
          {date} - {time}
        </p>

        <p className="font-bold text-3xl">{formattedAmount}</p>
        <p>{desc}</p>
      </div>

      <div className="absolute top--1 right-0  flex flex-col justify-center p-4 items-center gap-8 bg-purple-600 h-[103%] ">
        <button className="text-white w-6 " onClick={handleDeleteMovement}>
          {/* <FaEdit className="text-white text-lg" /> */}
          <img src={binImg} alt="trach icon" className="w-[100%] block" />
        </button>
        <button className="text-white w-6" onClick={handleEditMovement}>
          {/* <FaTrashAlt className="text-white text-lg" /> */}
          <img src={editImg} alt="edit icon" className="w-[100%] block" />
        </button>
      </div>
    </div>
  );
}
