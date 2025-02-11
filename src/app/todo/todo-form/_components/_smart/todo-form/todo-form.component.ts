import { Component } from '@angular/core';
import { TodoService } from '../../../../../core/todo.service';

@Component({
  selector: 'app-todo-form',
  // imports: [],
  standalone: false,
  templateUrl: './todo-form.component.html',
  styleUrl: './todo-form.component.scss'
})
export class TodoFormComponent {
  newTodo = '';

  constructor(private todoService: TodoService) {}

  addTodo(): void {
    if (this.newTodo.trim()) {
      this.todoService.addTodo(this.newTodo);
      this.newTodo = '';
    }
  }
}
