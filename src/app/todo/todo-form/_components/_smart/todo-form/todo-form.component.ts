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
    const trimVal: string = this.newTodo.trim();
    // this.trimVal = this.newTodo.trim();
    if (!trimVal) { return }
    // if (this.trimVal) {
      this.todoService.addTodo(trimVal);
      this.newTodo = '';
    // }
  }
}
