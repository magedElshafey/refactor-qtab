import { createSlice } from "@reduxjs/toolkit";
import Swal from "sweetalert2";
const initialState = {
  cartItems: JSON.parse(window.localStorage.getItem("cart")) || [],
  openCart: false,
};
const cartSlice = createSlice({
  initialState,
  name: "cartSlice",
  reducers: {
    // open cart
    openCart: (state) => {
      state.openCart = true;
    },
    // close cart
    closeCart: (state) => {
      state.openCart = false;
    },
    // add to cart
    addToCart: (state, action) => {
      const index = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );
      if (index >= 0) {
        state.cartItems[index].quantity++;
        Swal.fire({
          icon: "success",
          title: `${action.payload.title} QTY Increased`,
          position: "center",
          showConfirmButton: false,
          timer: 1500,
        });
      } else {
        const temp = { ...action.payload, quantity: 1 };
        state.cartItems.push(temp);
        Swal.fire({
          position: "center",
          title: `${action.payload.title} Addedd Successfully To Cart`,
          showConfirmButton: false,
          timer: 1500,
          icon: "success",
        });
      }
      window.localStorage.setItem("cart", JSON.stringify(state.cartItems));
    },
    // remove from cart :
    removeFromCart: (state, action) => {
      const newItems = state.cartItems.filter(
        (item) => item.id !== action.payload.id
      );
      state.cartItems = newItems;
      Swal.fire({
        icon: "success",
        position: "center",
        title: `${action.payload.title} Removed Successfully from cart`,
        showConfirmButton: false,
        timer: 1500,
      });
      window.localStorage.setItem("cart", JSON.stringify(state.cartItems));
    },
    // increase Quantity
    increaseQTY: (state, action) => {
      const index = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );
      if (index >= 0) {
        state.cartItems[index].quantity++;
        Swal.fire({
          icon: "success",
          position: "center",
          title: `${action.payload.title} QTY Increased`,
          showConfirmButton: false,
          timer: 1500,
        });
      }
    },
    // decrease QTY
    decreaseQTY: (state, action) => {
      const index = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );
      if (index >= 0) {
        if (state.cartItems[index].quantity > 1) {
          state.cartItems[index].quantity -= 1;
          Swal.fire({
            title: `${action.payload.title} QTY Decreased`,
            position: "center",
            icon: "success",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      }
    },
    // clear
    clearCart: (state) => {
      state.cartItems = [];
      window.localStorage.setItem("cart", state.cartItems);
    },
  },
});
export const {
  openCart,
  closeCart,
  addToCart,
  removeFromCart,
  increaseQTY,
  decreaseQTY,
  clearCart,
} = cartSlice.actions;
export default cartSlice.reducer;
