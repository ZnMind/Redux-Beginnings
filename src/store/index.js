import { configureStore } from '@reduxjs/toolkit';
import counterSlice from './counterSlice';
import decimalSlice from './decimalSlice';

const store = configureStore({
    reducer: {
        num: counterSlice.reducer,
        div: decimalSlice.reducer
    }
})

export default store;



// Without Redux Toolkit

/* import { createStore } from 'redux';

const reducerFn = (state = { counter : 0 }, action) => {
    if(action.type === 'INC') {
        return { counter: state.counter + 1 };
    }

    if(action.type === 'DEC') {
        return { counter: state.counter - 1 };
    }

    if(action.type === 'ADD') {
        return { counter: state.counter + action.payload };
    }

    return state;
};

const store = createStore(reducerFn)

export default store; */