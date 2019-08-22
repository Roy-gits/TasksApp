import { Component, OnInit } from '@angular/core';
import { UserDataService } from '../user-data.service';
import { Router } from '@angular/router';
import { MatDialog, MatDialogConfig } from '@angular/material';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  constructor(private _data: UserDataService, private _route: Router, private _dialog: MatDialog) { }

  ngOnInit() {
    let dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
  }

  onFormSubmit(f) {

    // console.log(f.value);


    this._data.addUser(f.value).subscribe(
      (data: any) => {
        alert('Record Added');
        this._dialog.closeAll();
        this._route.navigate(['/user']);

      }
    );
  }

  onBack() {
 // this._dialog.closeAll();
 this._dialog.closeAll();
 this._route.navigate(['/user']);
  }

}
