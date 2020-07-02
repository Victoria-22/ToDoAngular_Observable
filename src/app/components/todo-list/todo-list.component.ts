import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Todo } from '../../interfaces/todo';
import { FormBuilder, FormGroup } from '@angular/forms';
import { TodoService } from '../../todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  todos: Observable<Todo[]>;
  newTodosList = [];
  todoDescription: string;
  idForTodo: number;
  todoForm: FormGroup;
  constructor(
      private formBuilder: FormBuilder,
      private todoService: TodoService) {
    this.newTodosList = this.todoService.todos;
  }

  ngOnInit() {
    this.todoForm = this.formBuilder.group({
      task: ['']
    });
    this.idForTodo = 4;

    this.todos = this.todoService.getTodosList(this.newTodosList);
  }

  addTodo() {
    this.todoDescription = this.todoForm.get('task').value;

    this.newTodosList.push({
      id: this.idForTodo++,
      description: this.todoDescription,
      completed: false
    });

    this.todoForm.reset();
  }

  deleteTodo(id: number): void {
    const removedId = (todos) => todos.id === id;

    this.newTodosList.splice(this.newTodosList.findIndex(removedId), 1);
  }
}
