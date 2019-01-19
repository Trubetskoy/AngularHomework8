import {Component} from '@angular/core';
import {Validators, FormBuilder } from '@angular/forms';
import {ToDoServiceService} from '../../services/to-do-service.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {DialogOverviewExampleDialog} from '../modal/modal.component';
import {Router} from '@angular/router'



@Component ({
    selector: 'user',
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.scss'],
}
)

export class UserComponent{
    todoList:any = []
    
    constructor(private fb: FormBuilder, private toDoService: ToDoServiceService, public dialog: MatDialog, private router:Router,){
        this.toDoService.getToDo().then(res=>{
          console.log(res)
          this.todoList = res
        })
    }

  animal: string;
  name: string;

  openDialog(taskId, description): void {
    const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
      width: '250px',
      data: {_id: taskId, description: description, type:'prompt'},
      minHeight:'350px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log ('result', result)
      if(result){
      this.toDoService.chengeToDo({_id:result._id, description:result.description})
  
    }});
  }
  openDeleteDialog(taskId): void {
   
    const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
      width: '250px',
      data: {_id: taskId, type:'confirm'}
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result){
      this.toDoService.deleteToDo({_id:result._id})
  
    }});
  }
    todoForm = this.fb.group({
        todoInput: ['some', [Validators.required, Validators.email]]
    })
    registration(){
        console.log (this.todoForm)
    }
    todoSubmit (event){
      this.todoList = this.toDoService.addToDo (this.todoForm.controls.todoInput.value)
              
    }
    editToDoList (_id){
        
    }
    logout(){
      localStorage.clear()
      this.router.navigate(['login'])
     }
}