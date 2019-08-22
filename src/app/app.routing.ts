import { Routes, RouterModule } from '@angular/router';
import { TasksComponent } from './tasks/tasks.component';
import { AddtasksComponent } from './tasks/addtasks/addtasks.component';
import { EditTaskComponent } from './tasks/edit-task/edit-task.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { UserComponent } from './user/user.component';
import { AddUserComponent } from './user/add-user/add-user.component';


const arr:Routes = [

  {path:"", component:TasksComponent},
  {path:"addtask", component:AddtasksComponent},
  {path:"editTask/:Id", component:EditTaskComponent},
  {path:"pagenotfound", component:PagenotfoundComponent},
  {path:"user", component:UserComponent},
  {path:"adduser", component:AddUserComponent},
  {path:"**",  redirectTo:"/pagenotfound"}
];


export const routing = RouterModule.forRoot(arr);

