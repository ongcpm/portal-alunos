import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-level-view-dialog',
  templateUrl: './level-view-dialog.component.html',
  styleUrls: ['./level-view-dialog.component.scss']
})
export class LevelViewDialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<LevelViewDialogComponent>,
    @Inject( MAT_DIALOG_DATA ) public level: any
  ) { }

  ngOnInit(): void {
    console.log(this.level);
  }

  closeDialog() {
    this.dialogRef.close();
  }

}
