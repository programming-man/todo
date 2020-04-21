import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BroadcastTaskService {
  broadcastNewTodo = new EventEmitter<string>();

  constructor() { }

  sendNewTodo(todo: string) {
    this.broadcastNewTodo.emit(todo);
  }
}
