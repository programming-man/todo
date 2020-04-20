import { Component, OnInit } from '@angular/core';
import { BroadcastTaskService } from '../broadcast-task.service'
@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {

  constructor(private _link: BroadcastTaskService) { }

  ngOnInit(): void {
  }

  onInput(todo:string) {
    this._link.sendNewTodo(todo);
  }

}
