import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    token: localStorage.getItem("token") || null, 
  },
  reducers: {
    setCredentials: (state, action) => {
      state.token = action.payload;
      localStorage.setItem("token", action.payload); 
    },
    logout: (state) => {
      state.token = null;
      localStorage.removeItem("token"); 
    },
  },
});

export const { setCredentials, logout } = authSlice.actions;
export default authSlice.reducer;
