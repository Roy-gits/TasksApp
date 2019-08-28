import { Component, OnInit } from '@angular/core';
import { UserDataService } from './user-data.service';
import { UserData, resolved } from './user';
import { Router, ActivatedRoute } from '@angular/router';
import { MatDialog, MatDialogConfig,  } from '@angular/material';
import { AddUserComponent } from './add-user/add-user.component';
import { EditUserComponent } from './edit-user/edit-user.component';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
array: UserData[]=[];
newitem:any ={};
userData:resolved;
errorMessage:string;
  constructor(private _data: UserDataService, private _route: Router, private _dialog: MatDialog, private _active:ActivatedRoute) {

    this.userData = this._active.snapshot.data['userdata'];
   }


  ngOnInit() {
   this.array = this.userData.data;
   this.errorMessage = this.userData.errormessage;

  //  this._data.getUsers().subscribe(
  //  (data: UserData[]) =>{
  //   this.array = data;
  // });
  }

  onAdduser(){
    //this._route.navigate(['/adduser']);
    let dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    this._dialog.open(AddUserComponent,dialogConfig);

  }

  ondelete(item:UserData){
    this._data.deleteUser(item.user_email).subscribe(
      (data:any) => {
        this.array.splice(this.array.indexOf(item),1);
        alert('record deleted!');
      }
    );
  }

  onEdit(item:UserData){

    // this.newitem.email= this.array[i].user_email;
    // this.newitem.user = this.array[i].user_name;
    // this.newitem.password = this.array[i].user_password;
    // this.newitem.mobile = this.array[i].user_mobile_no;
    // let dialogConfigs = new MatDialogConfig();
    // dialogConfigs.disableClose = true;
    // dialogConfigs.autoFocus = true;
    // dialogConfigs.id = item.user_email;
    // this._dialog.open(EditUserComponent,dialogConfigs);
    this._route.navigate(['/user/edituser',item.user_email]);
  }

}
