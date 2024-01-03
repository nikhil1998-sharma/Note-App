import { createSlice, current } from "@reduxjs/toolkit";

const noteSlice = createSlice({
    name: 'noteSlice',
    initialState: {
        myNotes: []
    },
    reducers: {
        createNote: (state, action) =>{
            
            state.myNotes.push(action.payload);
            console.log(current(state)  )
            }
    }
})

export default noteSlice.reducer;
export const {createNote} = noteSlice.actions;