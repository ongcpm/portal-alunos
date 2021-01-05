import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { PageHeaderComponent } from './components/page-header/page-header.component';
import { FilterListPipe } from './filter.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './material.module';

import { ViewComponent } from './components/dialogs/view/view.component';
import { UserViewDialogComponent } from './components/dialogs/user-view-dialog/user-view-dialog.component';


@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule
  ],
  declarations: [
    SidebarComponent,
    PageHeaderComponent,
    ViewComponent,
    UserViewDialogComponent,
    FilterListPipe
  ],
  exports: [
    SidebarComponent,
    PageHeaderComponent,
    ViewComponent,
    UserViewDialogComponent,
    FilterListPipe,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule
  ]
})
export class SharedModule { }
 