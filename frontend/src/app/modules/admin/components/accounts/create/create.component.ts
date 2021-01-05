import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {
  
  constructor(private User: UserService, private router: Router, private snackBar: MatSnackBar) { }
    addForm = new FormGroup({
      email: new FormControl(''),
      phone_number: new FormControl(''),
      name: new FormControl(''),
      password: new FormControl('')
    });

    ngOnInit(): void {
    }
  
    createUser() {
      this.User.createNewUser(this.addForm.value).subscribe(
        (data: {msg}) => {
          this.snackBar.open(data.msg, 'Fechar', {
            duration: 3500,
            panelClass: ['dark-snackbar']
          });
          this.router.navigate(['accounts/list']);

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
