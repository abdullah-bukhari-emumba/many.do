import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from '../../../../_models/todo';

@Component({
  selector: 'app-todo-item',
  // imports: [],
  standalone: false,
  templateUrl: './todo-item.component.html',
  styleUrl: './todo-item.component.scss'
})
export class TodoItemComponent {
  @Input() todo!: Todo;
  @Output() toggleComplete = new EventEmitter<string>();
  @Output() delete = new EventEmitter<string>();
  @Output() edit = new EventEmitter<{ id: string; text: string }>();

  isEditing = false;
  editText = '';

  startEditing(): void {
    if (!this.todo.completed) {
      this.isEditing = true;
      this.editText = this.todo.text;
    }
  }

  finishEditing(value: string): void {
    if (this.isEditing) {
      const trimmedValue = value.trim();
      if (trimmedValue && trimmedValue !== this.todo.text) {
        this.edit.emit({ id: this.todo.id, text: trimmedValue });
      }
      this.isEditing = false;
    }
  }

  cancelEditing(): void {
    this.isEditing = false;
  }

  onToggle(): void {
    this.toggleComplete.emit(this.todo.id);
  }

  onDelete(): void {
    this.delete.emit(this.todo.id);
  }
}
