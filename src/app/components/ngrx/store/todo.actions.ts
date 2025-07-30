import { createAction, props } from "@ngrx/store";
import { TodoModel } from "../model/todo.model";


export const addTodo = createAction(
    '[Todo] Add Todo',
    props<{todo:TodoModel}>()
)

export const loadTodos = createAction('[Todo] Load Todos')