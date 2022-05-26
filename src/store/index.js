import { createSlice, configureStore } from "@reduxjs/toolkit";

const initCounterState = {counter: 0, showCounter: true};

const counterSlice = createSlice({
    name: 'counter',
    initialState: initCounterState,
    reducers: {
        increment(state) {
            state.counter ++;
        },
        decrement(state) {
            state.counter --;
        },
        increase(state, action) {
            state.counter = state.counter + action.payload;
        },
        toggle(state) {
            state.showCounter = !state.showCounter;
        }
    }
});

const initAuthState = {isAuthenticated: false};

const authSlice = createSlice({
    name: 'authenticated',
    initialState: initAuthState,
    reducers: {
        login(state) {
            state.isAuthenticated = true;
        },
        logout(state) {
            state.isAuthenticated = false;
        }
    }
});

const store = configureStore({
    reducer: {counter: counterSlice.reducer, auth: authSlice.reducer}
})

export const counterActions = counterSlice.actions;
export const authActions = authSlice.actions;
export default store;