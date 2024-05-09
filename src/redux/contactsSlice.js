import { createSlice } from '@reduxjs/toolkit';


const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [], // Initial state with an empty array of contacts
  },
  reducers: {
    addContact: {
      reducer: (state, action) => {
        state.items.push(action.payload); // Adding the new contact to the state
      },
      prepare({ name, number }) {
        return {
          payload: {
            name: name,
            number: number,
            id: crypto.randomUUID(), // Generating a unique ID for the contact using crypto.randomUUID()
          },
        };
      },
    },
    deleteContact: {
      reducer: (state, action) => {
        // Reducer function to delete a contact from the state
        state.items = state.items.filter((item) => item.id !== action.payload);
      },
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;
export default contactsSlice.reducer;