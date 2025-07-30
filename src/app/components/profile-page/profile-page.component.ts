import { Component } from '@angular/core';
import { AddTodoComponent } from "../ngrx/components/add-todo/add-todo.component";

@Component({
  selector: 'app-profile-page',
  imports: [AddTodoComponent],
  templateUrl: './profile-page.component.html',
  styleUrl: './profile-page.component.scss'
})
export class ProfilePageComponent {

}
