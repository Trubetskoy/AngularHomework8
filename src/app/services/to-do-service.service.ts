import { Injectable } from '@angular/core';
import {ToDoListInterface} from '../models/toDoList.Interface'
import * as uuid from 'uuid'
import {ApiService} from './api.service'

@Injectable({
  providedIn: 'root'
})
export class ToDoServiceService {

  list: any = [{_id: uuid(), value: 'some text', isDone: false}, {id: uuid(), value: 'more text', isDone: true}]

  constructor(private ApiService:ApiService) { }
  addToDo (value){
    this.list.forEach(element => {
      
    });
  this.list.push({_id: uuid(), value: value, isDone: false})
  return this.list
  }
  getToDo (){
  return  new Promise((resolve, reject)=>{
    this.ApiService.getList().subscribe(res=>{
      this.list = res
      resolve(this.list)
    })
   })
  }

  chengeToDo ( {id, value}){
    this.list.forEach((item)=>{
      if (item._id === id ){
        item.value = value
      }
    })
  }
  deleteToDo ({id}){
    this.list.forEach((item)=>{
      if (item._id === id){
        this.list.splice(id, 1)
      }
    })
  }
}
