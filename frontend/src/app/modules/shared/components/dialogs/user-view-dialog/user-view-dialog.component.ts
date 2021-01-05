import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-user-view-dialog',
  templateUrl: './user-view-dialog.component.html',
  styleUrls: ['./user-view-dialog.component.scss']
})
export class UserViewDialogComponent implements OnInit {
  
  constructor(
    public dialogRef: MatDialogRef<UserViewDialogComponent>,
    @Inject( MAT_DIALOG_DATA ) public user: any
  ) { }

  ngOnInit(): void {
    console.log(this.user);
  }

  closeDialog() {
    this.dialogRef.close();
  }

}
