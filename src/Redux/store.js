import { configureStore } from "@reduxjs/toolkit";
import lang from "./lang";
import Cards from "./Cards";
import Cart from "./Cart";
import Auth from "./Auth";
const store = configureStore({
  reducer: {
    lang,
    Cards,
    Cart,
    Auth,
  },
});
export default store;
