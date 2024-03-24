 import {createSlice} from '@reduxjs/toolkit'
import {addContact, deleteContact, fetchContacts} from './operations'
 
 const initialState = {
    items:[],
    isLoading:false,
    error:null
 }

const contactSlice = createSlice({
    name: 'contacts',
    initialState,
       reducers:{},

    extraReducers: builder => {
        builder
        .addCase(fetchContacts.pending,(state) => {
          state.isLoading = true;
        })
        .addCase(fetchContacts.fulfilled,(state, action) => {
          state.isLoading = false;
          state.error = null;
          state.items = action.payload;
        })
        .addCase(fetchContacts.rejected,(state, action) => {
          state.isLoading = false;
          state.error = action.error.message;
        })

        .addCase(addContact.pending, (state) => {
          state.isLoading = true;
          state.error = null;
        })
        .addCase(addContact.fulfilled, (state, action) => {
          state.isLoading = false;
          state.error = null;
          state.items.push(action.payload);
        })
        .addCase(addContact.rejected, (state, action) => {
          state.isLoading = false;
          state.error = action.error.message;
        })

        .addCase(deleteContact.pending, (state) => {
          state.isLoading = true;
          state.error = null;
        })
        .addCase(deleteContact.fulfilled, (state, action) => {
          state.isLoading = false;
          state.error = null;
          state.items = state.items
          .filter(
            item => 
            item.id !== action.payload.id);
        })
        .addCase(deleteContact.rejected, (state, action) => {
          state.isLoading = false;
          state.error = action.error.message;
          
        })

      },
    

});
  


// const contactSlice = createSlice({
//     name: 'contacts',
//     initialState: contactsInitialState,
//     reducers: {
//         addContacts:(state, action) =>{
//           state.contacts.push(action.payload);
//         },
//         deleteContacts(state, action){
//             state.contacts = state.contacts.filter(contact => contact.id !== action.payload);
       
//         },
//         setFilter: (state, action) => {
//             state.filter = action.payload;
//         }
//     }
// });
  
// // extraReducers: {
// //     [fetchTasks.pending](state, action) {},
// //     [fetchTasks.fulfilled](state, action) {},
// //     [fetchTasks.rejected](state, action) {},
// //   },




// export const {addContacts, deleteContacts, setFilter} = contactSlice.actions;
export const contactsReducer = contactSlice.reducer;
