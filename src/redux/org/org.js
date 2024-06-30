import { createSlice } from "@reduxjs/toolkit";

export const orgSlice = createSlice({
  name: "org",
  initialState: {
    name: "",
    description: "",
    email: "",
    phone: "",
    address: "",
    website: "",
  },
  reducers: {
    addOrg: (state, action) => {
      state.name = action.payload.name;
      state.email = action.payload.email;
      state.description = action.payload.description;
      state.address = action.payload.address;
      state.phone = action.payload.phone;
      state.website = action.payload.website;
    },
    removeOrg: (state) => {
      state.name = "";
      state.email = "";
      state.description = "";
      state.address = "";
      state.phone = "";
      state.website = "";
    },
  },
});

export const { addOrg,removeOrg } = orgSlice.actions;

export default orgSlice.reducer;
