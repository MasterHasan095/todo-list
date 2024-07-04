// src/app/todo.service.ts
import { Injectable } from '@angular/core';
import { Todo } from '../Models/todo.model';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private todos: Todo[] = [];
  private nextId: number = 1;

  constructor() {}

  getTodos(): Todo[] {
    return this.todos;
  }

  addTodo(title: string): void {
    const todo = new Todo(this.nextId++, title);
    this.todos.push(todo);
  }

  toggleTodoCompleted(id: number): void {
    const todo = this.todos.find(todo => todo.id === id);
    if (todo) {
      todo.completed = !todo.completed;
    }
  }

  deleteTodo(id: number): void {
    console.log("Reached #2")
    console.log(this.todos);
    this.todos = this.todos.filter(todo => todo.id != id);
    console.log(this.todos);

  }
}
