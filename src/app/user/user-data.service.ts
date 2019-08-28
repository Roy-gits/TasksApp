import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { endpoints } from '../../environments/environment';
import { Router } from '@angular/router';
import { map, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  constructor( private _http: HttpClient, private _router:Router) { }

  url: string = endpoints.url +'users/';
  redirectURL: string;



  getUsers() {
    return this._http.get(this.url).pipe(
      catchError (this.handleError)
    );
  }

  private handleError(ex:HttpErrorResponse){
   if(ex.error instanceof ErrorEvent){
        console.log('Client side Error : ', ex.message);
     }else{
       console.log('Server side Error :', ex.message);
     }
     return throwError('Something Went Wrong!');
  }

  getUserByID(user_email) {

    return this._http.get(this.url + user_email).pipe(
      catchError(this.handleError)
    );
  }

  addUser(user) {
    const body = JSON.stringify(user);
    const head = new HttpHeaders().set('content-type', 'application/json');
    return this._http.post(this.url, body, {headers: head}).pipe(
      catchError (this.handleError)
    );
  }

  deleteUser(id) {
    const head = new HttpHeaders().set ('content-type', 'application/json');
    return this._http.delete(this.url + id, {headers: head});
  }
  editUser(newuser) {
    let head = new HttpHeaders().set('Content-Type', 'application/json');
    let body = JSON.stringify(newuser);
    return this._http.put(this.url + newuser.user_email, body, {
      headers: head
    }).pipe(
      catchError(this.handleError)
    );
  }

  currentUser;


  login(useremail: string, userpassword: string) {
    if (useremail == 'a' && userpassword == 'a') {
      this.currentUser = {
        email: useremail,
        password: userpassword,
        isAdmin: true
      };
      return;
    }
    alert(" Invalid UserEmail/Password!!");
    // this.currentUser = {
    //   email: useremail,
    //   password: userpassword,
    //   isAdmin: false
    // };
  }

  logout() {
    this.currentUser = null;
    this.redirectURL = '';
    this._router.navigate(['']);
  }

  get isLoggedIn(): boolean {
    return !!this.currentUser;
  }

}
