import { Component, OnInit } from '@angular/core';
import { UserDataService } from './user-data.service';
import { UserData } from './user';
import { Router } from '@angular/router';
import { MatDialog, MatDialogConfig,  } from '@angular/material';
import { AddUserComponent } from './add-user/add-user.component';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(private _data: UserDataService, private _route: Router, private _dialog: MatDialog) { }

  array: UserData[]=[];

  ngOnInit() {
   this._data.getUsers().subscribe(
   (data: UserData[]) =>{
    this.array = data;
  });
  }

  onAdduser(){
    //this._route.navigate(['/adduser']);
    let dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    this._dialog.open(AddUserComponent,dialogConfig);

  }

}
