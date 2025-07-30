import { Component } from '@angular/core';
import { MateriallistModule } from '../../../../shared/materiallist/materiallist.module';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { TodoModel } from '../../model/todo.model';
import { addTodo } from '../../store/todo.actions';
import { getAllTodos } from '../../store/todo.selectors';


@Component({
  selector: 'app-add-todo',
  imports: [MateriallistModule],
  templateUrl: './add-todo.component.html',
  styleUrl: './add-todo.component.scss'
})
export class AddTodoComponent {

  name: string = '';
  dec: string = '';

  todos$: Observable<TodoModel[]>;

 constructor(private store: Store<TodoModel[]>) {
  this.todos$ = this.store.select(getAllTodos);
}

  addTodo() {
    const todo: TodoModel = {
      id: Date.now(),
      name: this.name,
      dec: this.dec,
    };

    this.store.dispatch(addTodo({ todo }));
    this.name = '';
    this.dec = '';
  }
}