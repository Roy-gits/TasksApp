
import { NgModule } from '@angular/core';
import { UserComponent } from './user.component';
import { AddUserComponent } from './add-user/add-user.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { userRouting } from './user.routing';
import { MatDialogModule } from '@angular/material';

@NgModule({

  declarations: [
    UserComponent,
    AddUserComponent,
    EditUserComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    userRouting,MatDialogModule
  ]

})

export class UserModule {}
