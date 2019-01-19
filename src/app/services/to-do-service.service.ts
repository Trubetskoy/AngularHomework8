import { Injectable } from '@angular/core';
import * as uuid from 'uuid'
import {ApiService} from './api.service'

@Injectable({
  providedIn: 'root'
})
export class ToDoServiceService {

  list: any = [{_id: uuid(), description: 'some text', status: false}, {id: uuid(), description: 'more text', status: true}]

  constructor(private ApiService:ApiService) { }

  addToDo (description, title){
    this.ApiService.addNewTodo(description, title)
  this.list.push({_id: uuid(), description: description, status: false})
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

  chengeToDo ( {_id, description}){
    this.list.forEach((item)=>{
      if (item._id === _id ){
        item.description = description
      }
    })
  }

  deleteToDo ({_id}){
    this.list.forEach((item)=>{
      if (item._id === _id){
        this.list.splice(_id, 1)
      }
    })
  }
}
