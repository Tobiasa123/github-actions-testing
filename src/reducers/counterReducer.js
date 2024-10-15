import { createSlice } from "@reduxjs/toolkit";

const savedCounter = sessionStorage.getItem('counter')
const initialState = parseInt(savedCounter) || 0;

const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment(state, action) {
            const newState = state + action.payload;
            sessionStorage.setItem('counter', newState)
            return newState
        },
        decrement(state, action){
            const newState = state - action.payload;
            sessionStorage.setItem('counter', newState)
            return newState
        },
    }
})

export const {increment, decrement} = counterSlice.actions

export default counterSlice.reducer