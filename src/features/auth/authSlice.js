import { createSlice } from "@reduxjs/toolkit";

// inintial state
const initialState = {
    accessToken: undefined,
    user: undefined,
};

// create Slice
const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        userLoggedIn: (state, action)=>{
            state.accessToken = action.payload.accessToken;
            state.user = action.payload.user;
        },
        userLoggedOut: (state)=>{
            state.accessToken = undefined;
            state.user = undefined;
        },
    },
});

export const {userLoggedIn, userLoggedOut} = authSlice.actions;
export default authSlice.reducer;
