import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Todo } from '../todo/_models/todo';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  private todos: Todo[] = [];
  private todosSubject = new BehaviorSubject<Todo[]>([]);
  private todo$: any = this.todosSubject.asObservable();
  constructor() {
    const savedTodos = localStorage.getItem('todos');
    if (savedTodos) {
      this.todos = JSON.parse(savedTodos);
      this.todo$.next(this.todos);
    }
  }

  getTodos(): Observable<Todo[]> {
    return this.todo$;
  }

  addTodo(text: string): void {
    const newTodo: Todo = {
      id: crypto.randomUUID(),
      text: text.trim(),
      completed: false,
    };
    this.todos = [newTodo, ...this.todos];
    this.updateTodos();
  }

  toggleTodo(id: string): void {
    this.todos = this.todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    this.updateTodos();
  }

  updateTodoText(id: string, text: string): void {
    this.todos = this.todos.map((todo) =>
      todo.id === id ? { ...todo, text: text.trim() } : todo
    );
    this.updateTodos();
  }

  deleteTodo(id: string): void {
    this.todos = this.todos.filter((todo) => todo.id !== id);
    this.updateTodos();
  }

  private updateTodos(): void {
    localStorage.setItem('todos', JSON.stringify(this.todos));
    this.todosSubject.next(this.todos);
  }
}
