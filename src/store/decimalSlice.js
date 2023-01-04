import { createSlice } from '@reduxjs/toolkit';

const decimalSlice = createSlice({
    name: 'decimal',
    initialState: { dec: 0 },
    reducers: {
        divide(state, action) {
            state.dec = action.payload / 100
        }
    }
})

export const decimalActions = decimalSlice.actions;

export default decimalSlice;