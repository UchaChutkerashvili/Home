import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { todoReducer } from "./todo/todo.reducers";
import { doneReducer } from "./done/done.reducers";

const rootReducer = combineReducers({
    todo: todoReducer,
    done: doneReducer
})

export const store = configureStore({
    reducer: rootReducer
})