import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/modules/shared/shared.module';
import { StudentsRoutingModule } from './student-routing.module';
import { ListComponent } from './list/list.component';
import { CreateComponent } from './create/create.component';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    StudentsRoutingModule,
    SharedModule
  ],

  declarations: [
    ListComponent,
    CreateComponent
  ],

  exports: [
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class StudentsModule { }
