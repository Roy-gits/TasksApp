import { Component, OnInit } from '@angular/core';
import { UserDataService } from '../user-data.service';
import { UserData } from '../user';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {

  constructor(private _data:UserDataService, private _active:ActivatedRoute) { }

  email:string="";
  user:string="";
  pass:string="";
  mob:string="";

  array:UserData[]=[]

  ngOnInit() {
 this.email = this._active.snapshot.params["user_email"];
 this._data.getUserByID(this.email).subscribe(
      (data:UserData[]) => {
       this.email = data[0].user_email;
       this.user = data[0].user_name;
       this.pass = data[0].user_password;
       this.mob = data[0].user_mobile_no;
      }
    );
  }

  onupdate(f){

  }

}
