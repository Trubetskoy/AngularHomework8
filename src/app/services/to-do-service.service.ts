import { Injectable } from '@angular/core';
import * as uuid from 'uuid';
import { ApiService } from './api.service';

@Injectable({
    providedIn: 'root'
})
export class ToDoServiceService {
    selected = 'option2';
    list: any = [];

    constructor(private apiService: ApiService) {
    }

    addToDo(description, title): Promise<any> {
        return new Promise((resolve, reject) => {
            try {
                this.apiService.addNewTodo(description, title).then((data) => {
                    this.list.push({ id: uuid(), description: description, status: false, title: title });

                    resolve(this.list);
                });
            } catch (e) {
                reject(e);
            }
        });
    }

    getToDo() {
        return new Promise((resolve, reject) => {
            this.apiService.getList().subscribe(res => {
                this.list = res;
                resolve(this.list);
            });
        });
    }

    chengeToDo(task) {
        this.list.forEach((item) => {
            if (item.id === task.id) {
                this.apiService.editList(item, task.description).then(res => {
                    item = res;
                });
            }
        });
    }

    deleteToDo({ id }) {
        console.log(id)
        this.list.forEach((item) => {
            if (item.id === id) {
                this.apiService.deleteToDo(item.id).subscribe(res => {
                    this.list.splice(id, 1);
                });
            }
        });
    }
}
