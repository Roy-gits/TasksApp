import { Route, RouterModule, Routes } from "@angular/router";
import { UserTableComponent } from 'src/app/user-table/user-table.component';
import { UserGuardService } from 'src/app/user-guard.service';
import { MatTasksComponent } from './mat-tasks.component';

const arr:Routes = [

  {path:'', component:MatTasksComponent}

  ];

  export const matTaskRoute = RouterModule.forChild(arr)
