import {Component} from '@angular/core';
import {Validators, FormBuilder} from '@angular/forms';
import {ToDoServiceService} from '../../services/to-do-service.service';
import {MatDialog} from '@angular/material';
import {DialogOverviewExampleDialog} from '../modal/modal.component';
import {Router} from '@angular/router';

@Component({
        selector: 'user',
        templateUrl: './user.component.html',
        styleUrls: ['./user.component.scss'],
    }
)

export class UserComponent {
    constructor(private fb: FormBuilder, private toDoService: ToDoServiceService, public dialog: MatDialog, private router: Router, ) {
        this.toDoService.getToDo().then(res => {
            this.todoList = res;
        });
    }

    todoList: any = [];
    name: string;
    toDoFilter: string = null;

    todoForm = this.fb.group({
        todoInput: ['some', [Validators.required, Validators.email]],
        title: ['title', Validators.required],

    });

    openDialog(task): void {
        const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
            width: '250px',
            data: {id: task.id, description: task.description, type: 'prompt'},
            minHeight: '350px'
        });

        dialogRef.afterClosed().subscribe(result => {
            if (result) {
                const newData = task;
                newData.description = result.description;
                this.toDoService.chengeToDo(newData);

            }
        });
    }

    openDeleteDialog(taskId): void {
        const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
            width: '250px',
            data: {id: taskId, type: 'confirm'}
        });

        dialogRef.afterClosed().subscribe(result => {
            if (result) {
                this.toDoService.deleteToDo({id: result.id});
            }
        });
    }

    todoSubmit(event) {
        event.preventDefault();
        this.toDoService.addToDo(this.todoForm.controls.todoInput.value, this.todoForm.controls.title.value)
            .then((res) => {
                this.todoList = res;
            });
    }

    logout() {
        localStorage.clear();
        this.router.navigate(['login']);
    }

    checkedToDoItem(event, task) {
        task.selected = event.checked;
        this.toDoService.chengeToDo(task);
    }

    onOptionChange(event, task) {
        this.toDoService.chengeToDo(task);
    }

    changeFilter(filterValue) {
        this.toDoFilter = filterValue;
    }
}
