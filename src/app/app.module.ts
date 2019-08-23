import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TasksComponent } from './tasks/tasks.component';
import { HttpClientModule } from '@angular/common/http';
import { AddtasksComponent } from './tasks/addtasks/addtasks.component';
import { FormsModule} from '@angular/forms';
import { MenuComponent } from './menu/menu.component';
import { routing } from './app.routing';
import { EditTaskComponent } from './tasks/edit-task/edit-task.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { UserComponent } from './user/user.component';
import { AddUserComponent } from './user/add-user/add-user.component';
import { EditUserComponent } from './user/edit-user/edit-user.component';
import { MatDialogModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



@NgModule({
  declarations: [
    AppComponent,
    TasksComponent,
    AddtasksComponent,
    MenuComponent,
    EditTaskComponent,
    PagenotfoundComponent,
    UserComponent,
    AddUserComponent,
    EditUserComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    routing,
    MatDialogModule,
    BrowserAnimationsModule

  ],
  providers: [],
  bootstrap: [AppComponent]

})
export class AppModule { }
