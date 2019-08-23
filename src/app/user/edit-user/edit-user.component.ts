import { Component, OnInit } from '@angular/core';
import { UserDataService } from '../user-data.service';
import { UserData } from '../user';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {

  constructor(private _data:UserDataService,
    private _route:Router,
    private _active:ActivatedRoute, private _dialog:MatDialog) { }

  email:string="";
  user:string="";
  pass:string="";
  mob:string="";

  //array:UserData[]=[]

  ngOnInit() {
 this.email = this._active.snapshot.params["user_email"];
 console.log(this.email);
 this._data.getUserByID(this.email).subscribe(
      (data:UserData[]) => {
       this.user = data[0].user_name;
       this.pass = data[0].user_password;
       this.mob = data[0].user_mobile_no;
      }
    );
  }

  onupdate(f){
this._data.editUser(f.value).subscribe(
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
