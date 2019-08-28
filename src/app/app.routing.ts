import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { UserTableComponent } from './user-table/user-table.component';
import { LoginComponent } from './login/login.component';
import { UserGuardService } from './user-guard.service';
import { MatTasksComponent } from './mat-tasks/mat-tasks.component';
import { HomeComponent } from './home/home.component';
import { AppCustomPreloader } from './appCustomPreloader';



const arr:Routes = [

  {path:'', redirectTo:'/home', pathMatch:'full'},
  {path:'home', component:HomeComponent},
  {path:'pagenotfound', component:PagenotfoundComponent},
  {path:'user', canLoad:[UserGuardService], loadChildren:'./user/user.module#UserModule'},
  {path:'tasks',data:{preload:true}, canLoad:[UserGuardService],  loadChildren:'./tasks/task.module#TaskModule'},
  {path:'mattable',canLoad:[UserGuardService], loadChildren:'./mat-tasks/mattask.module#MatTaskModule'},
  {path:'login',  component:LoginComponent},
  {path:'**',  redirectTo:'/pagenotfound'}
];


export const routing = RouterModule.forRoot(arr, {preloadingStrategy : AppCustomPreloader});

