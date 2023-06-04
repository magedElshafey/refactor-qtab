import { createSlice } from "@reduxjs/toolkit";
import Swal from "sweetalert2";
const initialState = {
  cards: JSON.parse(window.localStorage.getItem("card")) || [],
  modalIsOpen: false,
};
const cardSlice = createSlice({
  name: "cardSlice",
  initialState,
  reducers: {
    addNewCard: (state, action) => {
      console.log(action.payload);
      state.cards.push(action.payload);
      Swal.fire({
        icon: "success",
        position: "top-center",
        title: `Card created Successfully`,
      });
      localStorage.setItem("card", JSON.stringify(state.cards));
    },
    deleteCard: (state, action) => {
      state.cards = state.cards.filter((item) => item.id !== action.payload.id);
      Swal.fire({
        icon: "success",
        position: "top-center",
        title: `${action.payload.name} Deleted Successfully`,
      });
      localStorage.setItem("card", JSON.stringify(state.cards));
    },
    openModal: (state) => {
      state.modalIsOpen = true;
    },
    closeModal: (state) => {
      state.modalIsOpen = false;
    },
  },
});
export const { addNewCard, deleteCard, openModal, closeModal } =
  cardSlice.actions;
export default cardSlice.reducer;
