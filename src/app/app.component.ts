import { Component } from '@angular/core';
import { TodoFormModule } from "./todo/todo-form/todo-form.module";
import { TodoListModule } from './todo/todo-list/todo-list.module';

@Component({
  selector: 'app-root',
  imports: [
    TodoFormModule,
    TodoListModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'many.do.v2';
}
