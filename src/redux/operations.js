import axios from "axios";
// import {fetchingInProgress, fetchingSuccess, fetchingError} from './contactSlice'
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = 'https://63c85655075b3f3a91df2447.mockapi.io/contacts';

 export const fetchContacts = createAsyncThunk(
    'contacts/fetchAll', 
  // Використовуємо символ підкреслення як ім'я першого параметра,
  // тому що в цій операції він нам не потрібен
 async (_, thunkAPI)=> {
    try {
        console.log('fetchAll');
        const response = await axios.get('/contacts');
        console.log(JSON.stringify(response.data));
        return response.data;
    } catch (e) {
         // При помилці запиту повертаємо проміс
      // який буде відхилений з текстом помилки
      return thunkAPI.rejectWithValue(e.message);
    }
    
})
 export const addContact = createAsyncThunk (
    'contact/addContact',
    async (contact, thunkAPI ) =>{
        try {
            console.log(JSON.stringify(contact));
            const response = await axios.post('/contacts/', contact);
            return response.data;
        } catch (e) {
            return thunkAPI.rejectWithValue(e.message);
        }
    }
    
 );

export const deleteContact = createAsyncThunk(
    'contacts/deleteContact',

    async(contactId, thunkAPI) => { 
        try {
            console.log(contactId + 'prichod')
            const response = await axios.delete(`/contacts/${contactId}`);
            console.log(JSON.stringify(response))
            return response.data;
            } catch (e) {
                return thunkAPI.rejectWithValue(e.message)
            }
    }
)

// const fetchContact= () => async dispatch => {
//     try {
//         dispatch(fetchingInProgress());
//         const response =await axios.get('/contacts');
//         console.log(response)
//         dispatch(fetchingSuccess());

//     } catch (e){
//         dispatch(fetchingError(e.message));
//     }
//}