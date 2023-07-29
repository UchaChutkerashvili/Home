import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    doneList: [],
  };


const doneSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addToDone(state, action) {
            state.doneList.push(action.payload)
        }
    }
})


export const { addToDone } = doneSlice.actions
 
export default doneSlice.reducer