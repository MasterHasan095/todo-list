// src/app/todo-list/todo-list.component.ts
import { Component, OnInit } from '@angular/core';
import { TodoService } from '../Services/todo.service';
import { Todo } from '../Models/todo.model';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  todos: Todo[] = [];
  newTodoTitle: string = '';

  constructor(private todoService: TodoService) {}

  ngOnInit(): void {
    this.todos = this.todoService.getTodos();
  }

  addTodo(): void {
    if (this.newTodoTitle.trim().length === 0) {
      return;
    }
    this.todoService.addTodo(this.newTodoTitle);
    this.newTodoTitle = '';
  }

  toggleTodoCompleted(id: number): void {
    this.todoService.toggleTodoCompleted(id);
    this.todos = this.todoService.getTodos(); // Update todos

  }

  deleteTodo(id: number): void {
    console.log("Reached #1")
    this.todoService.deleteTodo(id);
    this.todos = this.todoService.getTodos(); // Update todos

    console.log(this.todoService.getTodos);
  }
}
