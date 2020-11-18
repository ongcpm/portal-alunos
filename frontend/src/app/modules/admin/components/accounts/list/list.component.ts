import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  public users = [];
  public student;
  public errorMessage: string;
  public closeResult: string;
  public searchText;
  public userenter;
  
  constructor(private usersService: UserService ) { }

  ngOnInit(): void {
    this.getAll();
  }

  getAll() { 
    this.usersService.getAll().subscribe((users: any[]) => {
      this.users = users;
      console.log(this.users);
    });
  } 
}
