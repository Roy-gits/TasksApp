import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { endpoints } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  constructor( private _http: HttpClient) { }

url: string = endpoints.url +'users/';



  getUsers() {
    return this._http.get(this.url);
  }

  getUserByID(user_email) {

    return this._http.get(this.url + user_email);
  }

  addUser(user) {
    const body = JSON.stringify(user);
    const head = new HttpHeaders().set('content-type', 'application/json');
    return this._http.post(this.url, body, {headers: head});
  }

  deleteUser(id) {
    const head = new HttpHeaders().set ('content-type', 'application/json');
    return this._http.delete(this.url + id, {headers: head});
  }
  editUser(newuser) {
    let head = new HttpHeaders().set("Content-Type", "application/json");
    let body = JSON.stringify(newuser);
    return this._http.put(this.url + newuser.user_email, body, {
      headers: head
    });
  }

}
