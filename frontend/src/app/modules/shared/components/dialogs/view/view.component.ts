import { Component, Inject, OnInit } from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit {
  students;

  constructor(
    public dialogRef: MatDialogRef<ViewComponent>,
    @Inject( MAT_DIALOG_DATA ) public data: any
  ) { }

  ngOnInit(): void {
    console.log('DATA', this.data)
    this.students = [this.data]

    console.log(this.students);
  }

  closeDialog() {
    this.dialogRef.close();
  }

  

}
