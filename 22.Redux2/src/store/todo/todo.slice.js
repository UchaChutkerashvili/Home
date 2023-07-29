import { createSlice } from "@reduxjs/toolkit";
import { getTodos } from "./todos.thunk";

const initialState = {
    todoList: [],
};


const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo(state, action) {
            state.todoList.push(action.payload)
        },
        deleteTodo(state, action) {
            state.todoList = state.todoList.filter(todo => todo.id !== action.payload.id);
        }
    },
    extraReducers: {
        [getTodos.fulfilled.type]:(state, action) => {
            state.todoList = action.payload;
        },
        [getTodos.rejected.type]: (state, action) => {
            state.error = action.payload
        }
    }
})


export const { addTodo, deleteTodo } = todoSlice.actions

export default todoSlice.reducer