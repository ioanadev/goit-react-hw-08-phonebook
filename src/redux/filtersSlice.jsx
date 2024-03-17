import { createSlice } from "@reduxjs/toolkit";



const filterSlice = createSlice({
    name: "filter",
    initialState: "",
    reducers:{
        findeContact(state, action){
            return (state= action.payload);
        }
    }
})
export const filterReducers = filterSlice.reducer;
export const {findeContact} = filterSlice.actions;