import { NgModule } from "@angular/core";
import { MatTasksComponent } from './mat-tasks.component';
import { CommonModule } from '@angular/common';
import { matTaskRoute } from './mattask.routing';
import { MatDialogModule, MatFormFieldModule, MatInputModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';


@NgModule({
  declarations:[
    MatTasksComponent
  ],
  imports:[
    CommonModule,
    matTaskRoute,

    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatProgressSpinnerModule
  ]
})

export class MatTaskModule {}
