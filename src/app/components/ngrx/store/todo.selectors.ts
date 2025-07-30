import { createFeatureSelector, createSelector } from "@ngrx/store";
import { TodoModel } from "../model/todo.model";


export const selectTodos = createFeatureSelector<TodoModel[]>('todos');


export const getAllTodos = createSelector(
    selectTodos,
    (state) => state
);