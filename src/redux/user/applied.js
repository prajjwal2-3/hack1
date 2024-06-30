import { createSlice } from "@reduxjs/toolkit";

export const appliedSlice = createSlice({
    name: 'applied',
    initialState: {
        ids: []
    },
    reducers: {
        addApplied: (state, action) => {
            state.ids.push(action.payload);
        },
        removeApplied: (state, action) => {
            state.ids = state.ids.filter(id => id !== action.payload);
        },
        clearApplied: (state) => {
            state.ids = [];
        }
    }
});

export const { addApplied, removeApplied, clearApplied } = appliedSlice.actions;

export default appliedSlice.reducer;
