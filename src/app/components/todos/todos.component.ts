import { Component } from '@angular/core';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent {
  todos : Todo[] ;

  constructor(){
    this.todos = [
      {
        sno: 1,
        title: "Go to the market",
        desc: "You need to go to the market to get this job done",
        active: true
      },
      {
        sno: 2,
        title: "Go to the mall",
        desc: "You need to go to the mall to get this job done",
        active: true
      },
      {
        sno: 3,
        title: "Go to the school",
        desc: "You need to go to the school to get this job done",
        active: true
      }
    ]
  }

}
