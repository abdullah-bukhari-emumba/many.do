import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TodoListComponent } from './_components/_smart/todo-list/todo-list.component';
import { TodoItemComponent } from './_components/_dumb/todo-item/todo-item.component';

@NgModule({
  declarations: [
    TodoListComponent,
    TodoItemComponent,
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    TodoListComponent,
  ]
})
export class TodoListModule { }
