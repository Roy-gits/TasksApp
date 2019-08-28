import { Component, OnInit } from '@angular/core';
import { UserDataService } from '../user/user-data.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(private _userdata:UserDataService) { }

  ngOnInit() {
  }

  onLogOut(){
this._userdata.logout();
  }

  isLoggedIn(){
    return this._userdata.isLoggedIn;
  }

}
