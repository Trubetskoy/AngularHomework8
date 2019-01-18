import {Component} from '@angular/core';
import {Validators, FormBuilder } from '@angular/forms';
import {ToDoServiceService} from '../../services/to-do-service.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {DialogOverviewExampleDialog} from '../modal/modal.component'



@Component ({
    selector: 'user',
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.scss'],
}
)

export class UserComponent{
    todoList:any = []
    
    constructor(private fb: FormBuilder, private toDoService: ToDoServiceService, public dialog: MatDialog){
        this.toDoService.getToDo().then(res=>{
          console.log(res)
          this.todoList = res
        })
    }

  animal: string;
  name: string;

  openDialog(taskId, value): void {
    const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
      width: '250px',
      data: {id: taskId, value: value, type:'prompt'},
      minHeight:'350px',
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result){
      this.toDoService.chengeToDo({id:result.id, value:result.value})
  
    }});
  }
  openDeleteDialog(taskId): void {
   
    const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
      width: '250px',
      data: {id: taskId, type:'confirm'}
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result){
      this.toDoService.deleteToDo({id:result.id})
  
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
    editToDoList (id){
        
    }
}