import { createSlice } from "@reduxjs/toolkit";

const UiInitialState = { cartIsVisible: false, notification: null }

const UiSlice = createSlice({
    name: 'ui',
    initialState: UiInitialState,
    reducers: {
        toggle(state) {
            state.cartIsVisible = !state.cartIsVisible
        },
        showNotification(state, action) {
            state.notification = { status: action.payload.status, title: action.payload.title, message: action.payload.message }
        }
    }
})

export const uiActions = UiSlice.actions;

export default UiSlice;



