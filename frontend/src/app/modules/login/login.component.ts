import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../../services/user/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  constructor(private User: UserService, private router: Router) { }

  loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl('')
  });

  loginUser() {
    this.User.userLogin(this.loginForm.value).subscribe(
      (data: any) => {
        if(data) {
          localStorage.setItem('access_token', data.token);
          this.router.navigate(['/admin/dashboard']);
        }
        
      },
      (err: HttpErrorResponse) => {
        console.log(err.error);
        if (err.error) {
          console.log(err.error);
        } else {
          console.log(err, 'Something Went Wrong!'); 
        }
      }
    );
  }

  ngOnInit() { }

} 