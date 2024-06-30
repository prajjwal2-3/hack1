import { createSlice } from "@reduxjs/toolkit";


export const allorgSlice = createSlice({
    name:'allorg',
    initialState:{
        organizations:[]
    },
    reducers:{
        addallOrg:(state,action)=>{
            state.organizations=action.payload
        }
    }
})

export const {addallOrg} = allorgSlice.actions;

export default allorgSlice.reducer;