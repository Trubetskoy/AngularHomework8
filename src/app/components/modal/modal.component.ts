import {Component, Inject} from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

export interface DialogData {
    name: string;
  }

@Component({
    selector: 'dialog-overview-example-dialog',
    templateUrl: 'modal.component.html',
  })
  export class DialogOverviewExampleDialog {
  
    constructor(
      public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
      @Inject(MAT_DIALOG_DATA) public data: DialogData) {}
  
    onNoClick(): void {
      this.dialogRef.close();
    }
  
  }