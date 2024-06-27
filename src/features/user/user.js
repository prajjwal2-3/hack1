import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name:'user',
    initialState:{
        name:'',
        email:'',
        id:'',
        role:''
    },
    reducers:{
        addUser:(state,action)=>{
            state.name = action.payload.name
            state.email = action.payload.email
            state.id = action.payload.id
            state.role = action.payload.role
        }
    }
})
export const { addUser } = userSlice.actions;


export default userSlice.reducer;
