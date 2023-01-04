import { createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
    name: 'counter',
    initialState: { counter: 0, dbl: 0, custom: 0 },
    reducers: {
        increment(state) {
            state.counter++;
        },
        decrement(state) {
            state.counter--;
        },
        addBy(state, action) {
            state.counter += action.payload;
        },
        double(state) {
            state.dbl = state.counter * 2;
        },
        customNum(state, action) {
            state.custom = action.payload;
        }
    }
})

export const counterActions = counterSlice.actions;

export default counterSlice;