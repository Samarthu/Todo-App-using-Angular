import { Component, OnInit } from '@angular/core';
import {Todo } from './todo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'angular-TodoApp';
  todoThing: any = "";
  list :Todo[] = [];
  user:number = 10;
  ids:number[]=[10,20,30,40,50];

  ngOnInit(): void {
    this.todoThing = "";
    this.list = [];      
  }
  // add(){alert("add")}
  addItem()
  {
    if(this.todoThing!== "")
    {
      const newList: Todo = {
        id: Date.now(),
        value:this.todoThing,
        isDone:false
      };
      this.list.push(newList);
      this.ids.push(newList.id);
      alert("todo Added");
      console.warn(this.list);
    }
    this.todoThing = "";
  }

}
