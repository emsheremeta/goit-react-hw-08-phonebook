import { configureStore } from "@reduxjs/toolkit";
import {contactReducer} from 'redux/contactSlice'
import { filterSlice } from "./filterSlice";

export const store = configureStore ({
  reducer :{
    contacts:contactReducer,
    filter: filterSlice.reducer
  },
})