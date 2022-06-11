import { createSlice } from '@reduxjs/toolkit'


const initialState = {
  items: [],
  filter: '',
};
 const contactsSlice  = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    saveContact: (state, action) => {
      state.items.push(action.payload);
    },
   deleteContact: (state, action) => {
      state.items = state.items.filter(
        contact => contact.id !== action.payload
      );
    },
   updateFilter: (state, action) => {
      state.filter = action.payload;
    },
     },
 });



export default contactsSlice.reducer
export const { saveContact, deleteContact,updateFilter } = contactsSlice.actions

