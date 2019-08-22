import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Tasksdata } from './task';
import { endpoints } from "../../environments/environment";


@Injectable({
  providedIn: 'root'
})
export class TaskDataService {

  //arr:Tasksdata[] = []

  url:string = endpoints.url+ "tasks/";

  constructor(private _http:HttpClient) { }


  getTasks(){
    return  this._http.get(this.url)
  }

  getTaskbyId(Id){
return this._http.get(this.url+Id)
  }

  addTasks(task){
    let body = JSON.stringify(task);
    let head = new HttpHeaders().set("content-type" , "application/Json")
    return this._http.post(this.url ,body,{headers:head} )
  }

  edittask(task){
    let body = JSON.stringify(task);
    let head = new HttpHeaders().set("content-type", "application/json")
    return this._http.put(this.url + task.Id, body, {headers:head});
  }

  deletetask(Id){
    let head = new HttpHeaders().set("content-type", "application/Json")
    return this._http.delete(this.url+Id , )
  }


}
