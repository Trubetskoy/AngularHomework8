import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment} from '../../environments/environment';
import { Router } from '@angular/router';
import * as uuid from 'uuid'
import { reject, resolve } from 'q';


const url = environment.url

@Injectable({
  providedIn: 'root'
})
export class ApiService {
 private defaultHeaders:HttpHeaders
  

  constructor(private http: HttpClient, private router: Router) {

    this.defaultHeaders = new HttpHeaders({
      'Content-Type':'application/json'
    })
    if(localStorage.apiKey){
      this.defaultHeaders = this.defaultHeaders.append('x-apikey', localStorage.apiKey)
    }
    }

   addNewTodo (description, title){
     const data =  {
         userId: localStorage.apiKey,
         title: title,
         description: description,
         status: "new",
         selected: false
     }
     this.http.post(`${url}/todolist`,data, {headers: this.defaultHeaders})
      .subscribe(res => {
        console.log(res)
      })
   }

  registration (userData){
    let body = {
      name: userData.name,
	    surname: userData.surname,
    	email: userData.email,
    	phone: userData.phone,
    	password: userData.password
    }
   return new Promise ((resolve,reject) => {
     try {
      this.http.post(`${url}/registration`, body,{headers:this.defaultHeaders})
        .subscribe((res:any) => {
          localStorage.apiKey = res.token
          this.defaultHeaders = this.defaultHeaders.append('x-apikey',res.token)
          resolve()
        })
      } catch (e) {
        reject(e)
      }
    })
  }

  login (userData){
   let data = {
    'name': userData.name,
    'password': userData.password
    }
    return new Promise((resolve, reject) => {
      try {
      this.http.post(`${url}/login`,data,{headers:this.defaultHeaders})
        .subscribe((res:any)=>{
          localStorage.apiKey = res.token
          this.defaultHeaders = this.defaultHeaders.append('x-apikey',res.token)

           resolve()
         })
        } catch(e){
          reject(e)
        }
    })
  }

  getList(){
   
   return this.http.get(`${url}/todolist`,{headers: this.defaultHeaders})
  }

  editList(toDoItem, description){
    const data =  {
      userId: localStorage.apiKey,
      title: toDoItem.title,
      description: description,
      status: toDoItem.status,
      selected: toDoItem.selected,
    }
    return new Promise((resolve, reject) => {
      try {
      this.http.put(`${url}/todolist/${toDoItem._id}`,data , {headers: this.defaultHeaders})
      .subscribe((res:any)=>{
        resolve(res)
      })
      } catch(e){
        reject(e)
      }
    })    
  }

  deleteToDo (id) {
    return this.http.delete(`${url}/todolist/${id}`,{headers:this.defaultHeaders})
  }
}
