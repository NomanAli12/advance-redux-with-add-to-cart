import { configureStore } from "@reduxjs/toolkit";
import UiSlice from './UiSlice'
import cartSlice from "./cartSlice";

const store = configureStore({
    reducer: { ui: UiSlice.reducer, cart: cartSlice.reducer }
})

export default store;














