import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment} from '../../environments/environment';


const url = environment.url

@Injectable({
  providedIn: 'root'
})
export class ApiService {
 private defaultHeaders:HttpHeaders
  

  constructor(private http: HttpClient) {
    this.defaultHeaders = new HttpHeaders({
      'Content-Type':'application/json'
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
          this.defaultHeaders.append('x-apikey',res.token)
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
           this.defaultHeaders.append('x-apikey',res.token)
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
}
