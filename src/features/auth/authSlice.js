import { createSlice } from "@reduxjs/toolkit";

// inintial state
const initialState = {};

// create Slice
const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {},
});

export const {} = authSlice.actions;
export default authSlice.reducer;
