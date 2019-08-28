import { Component, OnInit } from '@angular/core';
import { UserDataService } from '../user-data.service';
import { Router } from '@angular/router';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { UserData } from '../user';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { validateHorizontalPosition } from '@angular/cdk/overlay';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  adduser:FormGroup;

  constructor(private _data: UserDataService, private _route: Router,
     private _dialog: MatDialog, private fb:FormBuilder) { }
arr: UserData[] = [];

// user_email: string;
// user_name: string;
// user_password: string;
// user_mobile_no: string;
  ngOnInit() {
this.adduser = this.fb.group({
  user_email : new FormControl (null,[
    Validators.required, Validators.email
  ]),
  user_name : new FormControl(null, Validators.required),
  user_password : new FormControl(null, Validators.required),
  user_mobile_no :  new FormControl (null, Validators.required)
})
  }

  onUserSave() {
    // console.log(f.value);
    this._data.addUser(this.adduser.value).subscribe(
      (data: any) => {
        //this.arr.push( new UserData(f.value.user_email, f.value.user_name, f.value.user_password, f.value.user_mobile_no));
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
