import { NgModule } from '@angular/core';
import { CommonModule }   from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router'
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpConfigInterceptor } from 'src/app/interceptor/httpconfig.interceptor';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StudentsComponent } from './components/students/students.component';
import { AccountsComponent } from './components/accounts/accounts.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AdminRoutingModule,
    RouterModule,
    SharedModule
    
  ],
  declarations: [
    AdminComponent,
    DashboardComponent,
    StudentsComponent,
    AccountsComponent,
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpConfigInterceptor,
      multi: true
    }
  ],
  bootstrap: [AdminComponent]
})
export class AdminModule { }
