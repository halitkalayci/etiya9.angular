import { TodoCardComponent } from './../todo-card/todo-card.component';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [FormsModule, TodoCardComponent],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.scss',
})
export class TodoListComponent {
  todoList: string[] = [];
  newTodo: string = '';

  add(): void {
    const existingItem = this.todoList.find((i) => i == this.newTodo);
    if (!existingItem && this.newTodo.trim().length > 0)
      this.todoList.push(this.newTodo);
    this.newTodo = '';
  }

  remove(todo: string) {
    this.todoList = this.todoList.filter((i) => i !== todo);
  }
}
