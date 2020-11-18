
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon'
import {MatSnackBarModule} from '@angular/material/snack-bar';


@NgModule({
    imports: [
        CommonModule,
        MatButtonModule,
        MatMenuModule,
        MatIconModule,
        MatSnackBarModule
    ],

    declarations: [ ],

    exports: [
        MatButtonModule,
        MatMenuModule,
        MatIconModule,
        MatSnackBarModule
    ]
})

export class MaterialModule { }


