import { createSlice } from "@reduxjs/toolkit";
import { initialContacts } from "utils/initialContacts";


const initialState = {contacts: initialContacts, filter:''};


const contactSlice = createSlice({
    name: 'contacts',
    initialState,
    reducers: {
        addContact: (state, action) => {
            state.contacts.unshift(action.payload);
        },
        deleteContact: (state, action) =>{
            state.contacts = state.contacts.filter(contact => contact.id !== action.payload);
        },
        onFilterChange: (state, action) => {
            state.filter = action.payload;
        },
    },
});


export const {addContact, deleteContact, onFilterChange} = contactSlice.actions;
export const contactReducer = contactSlice.reducer;
