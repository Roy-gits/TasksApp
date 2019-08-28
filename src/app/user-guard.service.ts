import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, CanLoad, Route } from '@angular/router';
import { UserDataService } from './user/user-data.service';

@Injectable({
  providedIn: 'root'
})
export class UserGuardService implements CanActivate, CanLoad {

  constructor(private _user: UserDataService, private _router: Router) { }

  canActivate(_route: ActivatedRouteSnapshot, _state: RouterStateSnapshot){

    return this.isUserLoggedIn(_state.url);
  }

  canLoad(_route:Route){
    return this.isUserLoggedIn(_route.path);
  }


  isUserLoggedIn(url: string): boolean {

    if(this._user.isLoggedIn){
      return true;
    }
    this._user.redirectURL = url;
    console.log(url);
    this._router.navigate(['/login']);
    return  false;
  }

}
