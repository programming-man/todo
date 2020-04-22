import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css'],
  template:`
  <div class="item">
    <h1>
        <ng-content></ng-content> 
        {{ item.title }}
    </h1>
    <p>{{ item.description }}</p>
  </div>
  `
  
})
export class ItemComponent implements OnInit {

  @Input() item:any 

  constructor() { }

  ngOnInit(): void {
  }

}

/*
  `
    <ng-content>
    <todo>
      <li>
        <span class="deleteIcon"><i class="fa fa-trash"></i></span>
        <span>{{todo}}</span>
      </li>
    </todo>
    </ng-content> 
  `
  */
