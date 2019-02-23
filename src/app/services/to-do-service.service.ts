import { Injectable } from '@angular/core';
import * as uuid from 'uuid';
import {ApiService} from './api.service';

@Injectable({
  providedIn: 'root'
})
export class ToDoServiceService {
  selected = 'option2';

  list: any = [];

  constructor(private ApiService: ApiService) { }

  addToDo (description, title): Promise<any> {
   return new Promise((resolve, reject) => {
      try {
      this.ApiService.addNewTodo(description, title).then((data) => {
        this.list.push({_id: uuid(), description: description, status: false, title: title});

        resolve(this.list);
      }); } catch (e) {
        reject(e);
      }
    });

  }

  getToDo () {
  return  new Promise((resolve, reject) => {
    this.ApiService.getList().subscribe(res => {
      this.list = res;
      resolve(this.list);
    });
   });
  }

  chengeToDo (task) {
    this.list.forEach((item) => {
      if (item._id ===  task._id ) {
        this.ApiService.editList(item, task.description).then(res => {
          item = res;
        });
      }
    });
  }

  deleteToDo ({_id}) {
    this.list.forEach((item) => {
      if (item._id === _id) {
        this.ApiService.deleteToDo(item._id).subscribe (res => {
          this.list.splice(_id, 1);
        });
      }
    });
  }

}
