import {Component} from '@angular/core';
import {Validators, FormBuilder } from '@angular/forms';
import {ToDoServiceService} from '../../services/to-do-service.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {DialogOverviewExampleDialog} from '../modal/modal.component';
import {Router} from '@angular/router'
import { discardPeriodicTasks } from '@angular/core/testing';



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
          console.log(322222, res)
          this.todoList = res
        })
    }

  animal: string;
  name: string;

  openDialog(task): void {
    const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
      width: '250px',
      data: {_id:task._id, description: task.description, type:'prompt'},
      minHeight:'350px'
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result){
      let newData = task
      newData.description = result.description
      this.toDoService.chengeToDo(newData)
  
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
        todoInput: ['some', [Validators.required, Validators.email]],
        title:['title', Validators.required],
       
    })
    
    todoSubmit (event){
      event.preventDefault()
      this.toDoService.addToDo (this.todoForm.controls.todoInput.value, this.todoForm.controls.title.value)
      .then((res)=>{
        this.todoList = res
      })
              
    }

    logout(){
      localStorage.clear()
      this.router.navigate(['login'])
     }
    
    checkedToDoItem(event, task){
      task.selected = event.checked
      this.toDoService.chengeToDo(task)
    }

    onOptionChange (event, task){
      this.toDoService.chengeToDo(task)
    }
}