import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from 'redux';
import  todoReducer  from "./todo/todo.slice";
import  doneReducer  from "./done/done.slice";

const rootReducer = combineReducers({
    todo: todoReducer,
        done: doneReducer
})

export const store = configureStore({
    reducer:  rootReducer
})