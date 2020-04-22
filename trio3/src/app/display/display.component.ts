import { Component, OnInit } from '@angular/core';
import { BroadcastTaskService } from '../broadcast-task.service'


@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {

  constructor(private _link: BroadcastTaskService) { }
  
  todoList: string[] = []

  ngOnInit(): void {
    this.adicionar()
  }

  adicionar(){
    this._link.broadcastNewTodo.subscribe((result) => {
      this.todoList.push(result)
      console.log(result)
    })
  }

  deletar(event){
    console.log(`evento do deletar passa:`);
    
  }


}
