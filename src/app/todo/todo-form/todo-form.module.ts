import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TodoFormComponent } from './_components/_smart/todo-form/todo-form.component';

@NgModule({
  declarations: [
    TodoFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    TodoFormComponent
  ]
})
export class TodoFormModule { }
