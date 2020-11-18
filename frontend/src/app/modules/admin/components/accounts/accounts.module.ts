import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { SharedModule } from 'src/app/modules/shared/shared.module';
import { AccountsRoutingModule } from './accounts-routing.module';
import { CreateComponent } from './create/create.component';



@NgModule({
  imports: [
    CommonModule,
    AccountsRoutingModule,
    SharedModule
  ],
  declarations: [
    ListComponent,
    CreateComponent
  ]
})
export class AccountsModule { }
 