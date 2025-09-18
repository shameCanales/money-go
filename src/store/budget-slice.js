import { createSlice } from "@reduxjs/toolkit";
import { getDate, generateId, getCurentTime } from "../util/util";

const initialBudgetState = {
  movements: [],
  indexEditing: 0,
};

const budgetSlice = createSlice({
  name: "budget",
  initialState: initialBudgetState,
  reducers: {
    loadMovementsFromLocalStorage(state) {
      localStorage.getItem("movements") !== null &&
        (state.movements = JSON.parse(localStorage.getItem("movements")));
    },

    addMovement(state, action) {
      const dateToday = getDate();
      const randomId = generateId();
      const getTime = getCurentTime();

      state.movements = [
        {
          id: randomId,
          movementType: action.payload.type,
          amount: action.payload.amount,
          desc: action.payload.description,
          date: dateToday,
          time: getTime,
        },
        ...state.movements,
      ];

      localStorage.setItem("movements", JSON.stringify(state.movements));
    },

    removeMovement(state, action) {
      const idToRemove = action.payload;
      state.movements = state.movements.filter(
        (movement) => movement.id !== idToRemove
      );

      localStorage.setItem("movements", JSON.stringify(state.movements));
    },

    editMovement(state, action) {
      const { amount, type, description, id, date, time } = action.payload;

      const indexToEdit = state.movements.findIndex(
        (movement) => movement.id === id
      );

      if (indexToEdit !== -1) {
        state.movements[indexToEdit].amount = amount;
        state.movements[indexToEdit].movementType = type;
        state.movements[indexToEdit].desc = description;
        state.movements[indexToEdit].date = date;
        state.movements[indexToEdit].time = time;
      }

      localStorage.setItem("movements", JSON.stringify(state.movements));
    },
  },
});

export const budgetActions = budgetSlice.actions;
export default budgetSlice;

//Derived vs stored derived state
// Derived is just storing the movements(no totalDeposit, totalWithdrawal, and no reinitialization to compute these).
// - deriving the totalBalance on the component that needs that data based on the stored movements.
// stored Derived is computing the totalDeposit, totalWithdrawal, and currentBalance in the slice and storing them in the state.
// -for example a reinitializeBudget action that computes the totalDeposit, totalWithdrawal, and currentBalance based on the movements and updates the state accordingly.
// - used useEffect to call reinitialization after initial render and set movementItems as dependancy so it runs reinit everytime the movementItems change.
