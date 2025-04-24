import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: "ui",
  initialState: { addIsOpen: false, editIsOpen: false, currentIdtoEdit: null },
  reducers: {
    openAddModal(state) {
      state.addIsOpen = true;
    },
    closeAddModal(state) {
      state.addIsOpen = false;
    },
    openEditModal(state, action) {
      state.editIsOpen = true;
      state.currentIdtoEdit = action.payload;
    },
    closeEditModal(state) {
      state.editIsOpen = false;
      state.currentIdtoEdit = null;
    },
  },
});

export const uiActions = uiSlice.actions;
export default uiSlice;
