import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    contact: [],
}


const ContactReducer = createSlice({
    name: "Contacts",
    initialState,
    reducers:{
        GetAllContact: (state, {payload}) => {
            state.contact = payload;
        },
        AddAllContact: (state, {payload})=>{
            state.contact = state.contact.push(payload);
        },
        DeleteAllContact: (state, {payload})=>{
            state.contact = state.contact.filter((item)=>item._id !== payload._id);
        },
        UpdateAllContact: (state, {payload})=>{
            const Index = state.contact.findIndex((item)=>item._id === payload._id);
            state.contact[Index] = payload.data;
        }
    }
})

export const {GetAllContact, AddAllContact, DeleteAllContact, UpdateAllContact} = ContactReducer.actions;
export default ContactReducer.reducer;