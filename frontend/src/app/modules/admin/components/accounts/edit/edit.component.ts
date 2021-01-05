import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
  user: User;
  userId;

  constructor(
    private router: Router,
    private userService: UserService,
    private snackBar: MatSnackBar) {
  }

  editForm = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    phone_number: new FormControl(''),
  });


  ngOnInit(): void {
    this.userId = window.localStorage.getItem("editUserId");

    if (!this.userId) {
      alert("Invalid action.")
      this.router.navigate(['list']);
      return;
    }

    this.userService.getUserById(this.userId).subscribe(data => {
      console.log('data', data);
      
      if(data.phone_number) {
        this.editForm.setValue({ name: data.name, email: data.email, phone_number: data.phone_number});
      } else {
        this.editForm.setValue({ name: data.name, email: data.email, phone_number: '00000-0000'});
      }
    });
  }

  onSubmit() {
    this.userService.updateUser(this.userId, this.editForm.value).subscribe((data: any) => {
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
