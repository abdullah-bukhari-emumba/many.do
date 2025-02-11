import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoFormModule } from './todo-form/todo-form.module';
import { TodoListModule } from './todo-list/todo-list.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    TodoFormModule,
    TodoListModule
  ],
  exports: [
    TodoFormModule,
    TodoListModule
  ]
})
export class TodoModule { }
