import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user/user.service';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  menuItems;

  constructor(private user: UserService, private router: Router) {

    this.menuItems = [
      { title: 'Home', path: '/admin/dashboard' },
      { title: 'Accounts', path: '/admin/accounts/list', icon: '' },
      { title: 'Students', path: '/admin/students/list', icon: '' },
      { title: 'Levels', path: '/admin/levels/list', icon: '' },
      // { title: 'Records', path: '/admin/records/create', icon: '' }
    ]
  }

  ngOnInit(): void {

  }

  logout() {
    localStorage.removeItem('access_token');
    this.router.navigate(['/login']);
  }





}
