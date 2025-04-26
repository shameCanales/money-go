import "./App.css";
import Header from "./components/Header";
import CurrentBalance from "./components/CurrentBalance";
import Totals from "./components/Totals";
import Movements from "./components/Movements";
import "@fontsource/poppins";
import NewMovement from "./components/NewMovement";
import EditMovement from "./components/EditMovement";
import { budgetActions } from "./store/budget-slice";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

function App() {
  const dispatch = useDispatch();
  const movements = useSelector((state) => state.budget.movements);

  useEffect(() => {
    dispatch(budgetActions.loadMovementsFromLocalStorage());
  }, []);

  useEffect(() => {
    dispatch(budgetActions.reinitializeBudget());
  }, [movements]);

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

export default App;
