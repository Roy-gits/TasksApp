import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { endpoints } from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  constructor( private _http:HttpClient) { }

url:string= endpoints.url+"users/";



  getUsers(){
    return this._http.get(this.url)
  }

  getUserByID(Id){

    return this._http.get(this.url+Id);
  }

  addUser(user){
    let body = JSON.stringify(user);
    let head = new HttpHeaders().set("content-type", "application/json");
    return this._http.post(this.url,body,{headers:head});
  }


}
