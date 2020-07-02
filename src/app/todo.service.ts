import { Injectable } from '@angular/core';
import { Todo } from './interfaces/todo';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  todos: Todo[] = [
    {
      id: 1,
      description: 'Finish task in Angular',
      completed: false,
    },
    {
      id: 2,
      description: 'Go to the cinema',
      completed: false,
    },
    {
      id: 3,
      description: 'Drink coffee',
      completed: false,
    },
  ];

  getTodosList(todosList) {
    return of(todosList);
  }
}
