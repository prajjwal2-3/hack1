import { createSlice } from "@reduxjs/toolkit";

export const volunteerSlice = createSlice({
  name: "volunteer",
  initialState: {
    name: "",
    user_id: "",
    bio: "",
    skills: "",
    availability: "",
  },
  reducers: {
    addVolunteer: (state, action) => {
      state.name = action.payload.name,
        state.user_id = action.payload.user_id,
        state.bio = action.payload.bio,
        state.skills = action.payload.skills,
        state.availability = action.payload.availability
    },
    removeVolunteer:(state)=>{
        state.availability='',
        state.bio='',
        state.name='',
        state.skills='',
        state.user_id=''
    }
  },
});
export const {addVolunteer,removeVolunteer}=volunteerSlice.actions;

export default volunteerSlice.reducer;