import { createSlice } from "@reduxjs/toolkit";

const cartInitialState = { items: [], totalQuantity: 0 }

const cartSlice = createSlice({
    name: 'cart',
    initialState: cartInitialState,
    reducers: {
        addItemToCart(state, action) {
            const newItem = action.payload;
            const existingItem = state.items.find(v => v.id === newItem.id);
            state.totalQuantity = state.totalQuantity + 1
            if (!existingItem) {
                state.items.push({
                    id: newItem.id,
                    price: newItem.price,
                    quantity: 1,
                    totalPrice: newItem.price,
                    name: newItem.title,
                })
            } else {
                existingItem.quantity = existingItem.quantity + 1;
                existingItem.totalPrice = existingItem.totalPrice + newItem.price
            }
        },
        removeItemFromCart(state, action) {
            const id = action.payload;
            const existingItem = state.items.find(item => item.id === id)
            state.totalQuantity = state.totalQuantity - 1
            state.changed = true;
            if (existingItem.quantity === 1) {
                state.items = state.items.filter(item => item.id !== id) // yahan ye logic lag rhi hai k agar quantity ek hai or wo payload ki id se match ni ho rhi to usko return he na kro or baqi sb chizo ko return kro
            } else {
                existingItem.quantity = existingItem.quantity - 1
                existingItem.totalPrice = existingItem.totalPrice - existingItem.price;
            }
        }
    }
})

export const cartActions = cartSlice.actions;

export default cartSlice;


