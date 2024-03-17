import { configureStore } from "@reduxjs/toolkit";
import { contactsReducer } from "./contactsSlice";
import { filterReducers } from "./filtersSlice";



export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filterReducers,
  }
})
