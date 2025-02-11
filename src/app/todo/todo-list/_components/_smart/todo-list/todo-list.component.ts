import { Component, OnInit } from '@angular/core';
import { TodoService } from '../../../../../core/todo.service';
import { Todo } from '../../../../_models/todo';

@Component({
  selector: 'app-todo-list',
  // imports: [],
  standalone: false,
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.scss'
})
export class TodoListComponent implements OnInit {
  todos: Todo[] = [];
  currentFilter: 'all' | 'active' | 'completed' = 'all';
  filters: Array<'all' | 'active' | 'completed'> = ['all', 'active', 'completed'];

  constructor(private todoService: TodoService) {}

  ngOnInit(): void {
    this.todoService.getTodos().subscribe(todos => {
      this.todos = todos;
    });
  }

  get filteredTodos(): Todo[] {
    return this.todos.filter(todo => {
      if (this.currentFilter === 'active') return !todo.completed;
      if (this.currentFilter === 'completed') return todo.completed;
      return true;
    });
  }

  setFilter(filter: 'all' | 'active' | 'completed'): void {
    this.currentFilter = filter;
  }

  toggleTodo(id: string): void {
    this.todoService.toggleTodo(id);
  }

  updateTodo(todo: { id: string; text: string }): void {
    this.todoService.updateTodoText(todo.id, todo.text);
  }

  deleteTodo(id: string): void {
    this.todoService.deleteTodo(id);
  }
}
