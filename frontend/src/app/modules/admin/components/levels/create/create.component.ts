import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { LevelService } from 'src/app/services/level/level.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {
  createLevelForm: FormGroup;

  constructor(private levelService: LevelService, public fb: FormBuilder, private router: Router, private snackBar: MatSnackBar) {
    this.createLevelForm = this.fb.group({
      levelName: [''],
      status: {
        type: Boolean,
        default: true
      }
    })
  }
  

  ngOnInit(): void {
  } 

  createLevel() {
    const sendLevelObj = { 
      levelInfo: {
        levelName: this.createLevelForm.get('levelName').value }
    }
    
    this.levelService.createNewLevel(sendLevelObj).subscribe(
      (data: {msg}) => {
        this.snackBar.open(data.msg, 'Fechar', {
          duration: 3500,
          panelClass: ['dark-snackbar']
        });
        this.router.navigate(['levels/list']);

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
      }
    );



    
  }

}
