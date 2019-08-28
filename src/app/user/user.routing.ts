import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './user.component';
import { UserResolveService } from './user-resolve.service';
import { UserGuardService } from '../user-guard.service';
import { EditUserComponent } from './edit-user/edit-user.component';
import { AddUserComponent } from './add-user/add-user.component';

const arr:Routes = [
{path:'', children:[
  {path:'',resolve:{userdata:UserResolveService}, component:UserComponent},
  {path:'edituser/:user_email', component:EditUserComponent},
  {path:'adduser', component:AddUserComponent}
]}
];

export const userRouting = RouterModule.forChild(arr);

