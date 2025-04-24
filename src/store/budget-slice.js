import { createSlice } from "@reduxjs/toolkit";
import {
  getDate,
  generateId,
  getCurentTime,
  getTotalDeposit,
  getTotalWithdrawal,
} from "../util/util";

const initialBudgetState = {
  movements: [],
  currentBalance: 0,
  totalDeposit: 0,
  totalWithdrawal: 0,
  indexEditing: 0,
};

const budgetSlice = createSlice({
  name: "budget",
  initialState: initialBudgetState,
  reducers: {
    reinitializeBudget(state, action) {
      state.totalDeposit = getTotalDeposit(state.movements);
      state.totalWithdrawal = getTotalWithdrawal(state.movements);
      state.currentBalance = state.totalDeposit - state.totalWithdrawal;
      console.log("HELLO GITHUB");
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
    },

    removeMovement(state, action) {
      const idToRemove = action.payload;
      state.movements = state.movements.filter(
        (movement) => movement.id !== idToRemove
      );
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
    },
  },
});

export const budgetActions = budgetSlice.actions;
export default budgetSlice;

//thunk
// export const recalculateBudgetTotals = () => {
//   return (dispatch, getState) => {
//     dispatch(budgetActions.updateTotals());
//   };
// };
