import { useDispatch } from "react-redux";
import { useEffect } from "react";
import NewMovement from "../components/NewMovement";
import EditMovement from "../components/EditMovement";
import Header from "../components/Header";
import CurrentBalance from "../components/CurrentBalance";
import Totals from "../components/Totals";
import Movements from "../components/Movements";
import { budgetActions } from "../store/budget-slice";

export default function MainUi(){
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(budgetActions.loadMovementsFromLocalStorage());
  }, []);

  return (
    <div className="max-w-md mx-auto min-h-screen ">
      <NewMovement />
      <EditMovement />
      <Header />
      <CurrentBalance />
      <Totals />
      <Movements />
    </div>
  );
}