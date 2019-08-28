import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MenuComponent } from './menu/menu.component';
import { routing } from './app.routing';

import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

import { MatDialogModule, MatFormFieldModule, MatInputModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UserTableComponent } from './user-table/user-table.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { LoginComponent } from './login/login.component';
import { Interceptor } from './interceptor';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

import { HomeComponent } from './home/home.component';
import { AppCustomPreloader } from './appCustomPreloader';





@NgModule({
  declarations: [
    AppComponent,

    MenuComponent,

    PagenotfoundComponent,
    UserTableComponent,
    LoginComponent,

    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    routing,
    MatDialogModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatProgressSpinnerModule


  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: Interceptor, multi: true},AppCustomPreloader
  ],
  bootstrap: [AppComponent]

})
export class AppModule { }
