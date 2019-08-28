import { Component, OnInit } from '@angular/core';
import { UserDataService } from '../user-data.service';
import { UserData } from '../user';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog } from '@angular/material';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {
  edituser:FormGroup;
  constructor(private _data:UserDataService,
              private _route:Router,
              private _active:ActivatedRoute,
              private _dialog:MatDialog,
              private fb:FormBuilder) { }

  email:string;
  // user:string="";
  // pass:string="";
  // mob:string="";

  array:UserData;

  ngOnInit() {
 this.email = this._active.snapshot.params["user_email"];
 console.log(this.email);
 this._data.getUserByID(this.email).subscribe((data:UserData[]) => {
        this.array = data[0];
        this.edituser.patchValue({
          user_email : this.array.user_email,
          user_name : this.array.user_name,
          user_password : this.array.user_password,
          user_mobile_no : this.array.user_mobile_no
        });

      });

 this.edituser = this.fb.group({
  user_email : new FormControl (null,[
    Validators.required, Validators.email
  ]),
  user_name : new FormControl(null, Validators.required),
  user_password : new FormControl(null, Validators.required),
  user_mobile_no :  new FormControl (null, Validators.required)
})

  }

  onUsersubmit(){
this._data.editUser(this.edituser.value).subscribe(
  (data:any) => {
    alert("Data Updated!");
    this._route.navigate(['/user']);
  }
);
  }

  onBack(){
  //this._dialog.closeAll();
  this._route.navigate(['/user']);
  }

}
