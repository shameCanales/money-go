import Button from "../ui/Button";
import { useSelector } from "react-redux";
import MovementItem from "./MovementItem";
import { useDispatch } from "react-redux";
import { uiActions } from "../store/ui-slice";

function Movements() {
  const dispatch = useDispatch();
  const movementItems = useSelector((state) => state.budget.movements);

  const handleNewMovement = () => {
    dispatch(uiActions.openAddModal());
  };

  return (
    <div className="mx-4 mt-8 ">
      <div className=" flex justify-between items-center">
        <h3 className="poppins-bold text-base ">
          {movementItems.length > 0 && "Movements"}
        </h3>

        <div className="buttons flex gap-2 items-center">
          <Button handleClick={handleNewMovement} >
            + New Movement
          </Button>
        </div>
      </div>

      {movementItems.map((item) => (
        <MovementItem
          key={item.id}
          id={item.id}
          date={item.date}
          type={item.movementType}
          desc={item.desc}
          amount={item.amount}
          time={item.time}
        />
      ))}
    </div>
  );
}

export default Movements;
