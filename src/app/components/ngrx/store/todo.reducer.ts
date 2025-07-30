import { createReducer, on, State } from "@ngrx/store";
import { TodoModel } from "../model/todo.model";
import { addTodo, loadTodos } from "./todo.actions";




export const initialState:TodoModel[]=[];

export const todoReducer = createReducer(
    initialState,
     on(loadTodos, (state)=>[...state]),
     on(addTodo, (state, { todo }) => [...state, todo])
);