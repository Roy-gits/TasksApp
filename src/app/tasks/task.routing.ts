import { Routes, RouterModule } from "@angular/router";
import { TasksComponent } from './tasks.component';
import { AddtasksComponent } from './addtasks/addtasks.component';
import { EditTaskComponent } from './edit-task/edit-task.component';
import { TasksResolverService } from './tasks-resolver.service';

const array:Routes = [
{path:'', children:[
  {path:'',resolve:{taskdata:TasksResolverService}, component:TasksComponent},
  {path:'addtask', component:AddtasksComponent},
  {path:'editTask/:Id', component:EditTaskComponent}
]}


]

export const taskRouting = RouterModule.forChild(array);
