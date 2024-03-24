import { configureStore } from "@reduxjs/toolkit";
import { contactsReducer } from "./contacts/contactsSlice";
import { filterReducers } from "./filtersSlice";
import { authReducer } from "./auth/authSlice";



export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filterReducers,
    auth: authReducer,
  }
})
