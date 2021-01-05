import { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { AdminComponent } from './admin.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AuthGuard } from 'src/app/guard/auth.guard';

const routes: Routes = [
  { path: '', component: AdminComponent, 
    children: [
      { path: 'dashboard', canActivate: [ AuthGuard ], component: DashboardComponent },
      { path: 'accounts',   loadChildren: () => import(`./components/accounts/accounts.module`).then(m => m.AccountsModule)},
      { path: 'students', canActivate: [ AuthGuard ],  loadChildren: () => import(`./components/students/students.module`).then(m => m.StudentsModule)},
    ]  
  },
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }