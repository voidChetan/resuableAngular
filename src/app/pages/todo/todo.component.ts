import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  todoItem: string = '';
  todoItemsArray: any[] =[];
  todoObj: any = {
    todoItem: '',
    color: ''
  };
  constructor() { }

  ngOnInit(): void {
    const localData = localStorage.getItem('todoItems');
    if(localData != null) {
      this.todoItemsArray = JSON.parse(localData);
    }
  }
  onItemAdd() {
    this.todoItemsArray.push(this.todoObj);
    localStorage.setItem('todoItems',JSON.stringify(this.todoItemsArray));
    this.todoObj = {
      todoItem: '',
      color: ''
    };
  }
}
