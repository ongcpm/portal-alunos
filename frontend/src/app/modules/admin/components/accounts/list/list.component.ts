import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { UserViewDialogComponent } from 'src/app/modules/shared/components/dialogs/user-view-dialog/user-view-dialog.component';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  public users: User[];
  
  public errorMessage: string;
  public closeResult: string;
  public searchText;
  public userenter;
  
  constructor(
    private router: Router,
    private usersService: UserService,
    private dialog: MatDialog ) { }

  ngOnInit(): void {
    this.getAll();
  }

  getAll() { 
    this.usersService.getAll().subscribe((users: any[]) => {
      this.users = users;
      console.log(this.users);
    });
  } 

  editUser(user: User): void {
    window.localStorage.removeItem("editUserId");
    window.localStorage.setItem("editUserId", user._id.toString());
    console.log(localStorage);
    this.router.navigate(['accounts/edit/' + localStorage.getItem('editUserId')]);
  };

  deleteUser(userId) {
    console.log(userId);
    this.usersService.deleteUser(userId).subscribe(res => {
      console.log(res);
    })
  }

  viewUser(user) {
    const dialogRef = this.dialog.open(UserViewDialogComponent, {
      width: '600px',
      height: '300px',
      data: {
        user: user
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
 
}
