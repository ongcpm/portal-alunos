import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { SharedModule } from 'src/app/modules/shared/shared.module';
import { LevelsRoutingModule } from './levels-routing.module';
import { EditComponent } from './edit/edit.component';
import { CreateComponent } from './create/create.component';




@NgModule({
  imports: [
    CommonModule,
    LevelsRoutingModule,
    SharedModule
  ],
  declarations: [
    ListComponent,
    EditComponent,
    CreateComponent
  ]
})
export class LevelsModule { }
 