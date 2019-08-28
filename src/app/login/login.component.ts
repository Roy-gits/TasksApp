import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserDataService } from '../user/user-data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  login:FormGroup;

  constructor(private fb: FormBuilder,
              private _route:Router,
              private _data:UserDataService) { }

  ngOnInit() {
    this.login = this.fb.group({
      user_email: new FormControl(null,Validators.required),
      user_password: new FormControl(null, Validators.required)
    });

  }

  onLoginSubmit(){

      this._data.login(
      this.login.value.user_email,
      this.login.value.user_password
  );

  console.log(this._data.currentUser);
   if(this._data.redirectURL)
  {
    this._route.navigateByUrl(this._data.redirectURL);
  }else{
    this._route.navigate(['/user']);
  }
  //  if (this._data.redirectURL) {
  //    this._route.navigateByUrl(this._data.redirectURL);
  // } else {
  //
  // }


  }

}
