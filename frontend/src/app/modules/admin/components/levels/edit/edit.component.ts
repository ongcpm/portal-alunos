import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Level } from 'src/app/models/level';
import { LevelService } from 'src/app/services/level/level.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
  level: Level;
  levelId;
  editForm: FormGroup;

  constructor(
    private router: Router,
    private levelService: LevelService,
    private fb: FormBuilder,
    private snackBar: MatSnackBar
  ) {

    this.editForm = this.fb.group({
      levelName: ['']
    });

  }

  // editForm = new FormGroup({
  //   levelName: new FormControl(''),
  // });

  ngOnInit(): void {
    this.levelId = window.localStorage.getItem("editLevelId");

    if (!this.levelId) {
      alert("Invalid action.")
      this.router.navigate(['list']);
      return;
    }

    this.levelService.getLevelById(this.levelId).subscribe(data => {
      this.editForm.setValue({ levelName: data.levelInfo.levelName })
    });
  }

  onSubmit() {
    const value = this.editForm.get('levelName').value;
    const sendObj = { 
      levelInfo: {
        levelName: value 
      }
    }

    this.levelService.updateLevel(this.levelId, sendObj).subscribe((data: any) => {
      console.log('DATA', data);
      this.snackBar.open(data.msg, 'Fechar', {
        duration: 3500,
        panelClass: ['dark-snackbar']
      });
    },

      (err: HttpErrorResponse) => {
        if (err.error.msg) {
          this.snackBar.open(err.error.msg, 'Fechar', {
            duration: 3500,
            panelClass: ['danger-snackbar']
          });
        } else {
          this.snackBar.open('Something Went Wrong!', 'Fechar', {
            duration: 3500,
            panelClass: ['danger-snackbar']
          });
        }
      })
  }

}
