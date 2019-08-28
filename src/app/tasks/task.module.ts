import { NgModule } from "@angular/core";
import { TasksComponent } from './tasks.component';
import { AddtasksComponent } from './addtasks/addtasks.component';
import { EditTaskComponent } from './edit-task/edit-task.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { taskRouting } from './task.routing';

@NgModule({
  declarations:[
    TasksComponent,
    AddtasksComponent,
    EditTaskComponent
  ],
  imports:[ CommonModule, FormsModule, taskRouting]
})

export class TaskModule {}
