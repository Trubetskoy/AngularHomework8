import { Injectable } from '@angular/core';
import {ToDoListInterface} from '../models/toDoList.Interface'
import * as uuid from 'uuid'

@Injectable({
  providedIn: 'root'
})
export class ToDoServiceService {

  list: ToDoListInterface [] = [{id: uuid(), value: 'some text', isDone: false}, {id: uuid(), value: 'more text', isDone: true}]

  constructor() { }
  addToDo (value){
    this.list.forEach(element => {
      
    });
  this.list.push({id: uuid(), value: value, isDone: false})
  return this.list
  }
  getToDo (){
    return this.list
  }

  chengeToDo ( {id, value}){
    this.list.forEach((item)=>{
      if (item.id === id ){
        item.value = value
      }
    })
  }
  deleteToDo ({id}){
    this.list.forEach((item)=>{
      if (item.id === id){
        this.list.splice(id, 1)
      }
    })
  }
}
