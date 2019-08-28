import { Injectable } from '@angular/core';
import { TaskDataService } from './task-data.service';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import {  Taskresolved } from './task';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TasksResolverService implements Resolve<Taskresolved>  {

  constructor(private _data:TaskDataService) { }

  resolve(route:ActivatedRouteSnapshot, state:RouterStateSnapshot):Observable<any>{
    return this._data.getTasks().pipe(
      map(x=>({data:x, errormessage:''})
    ),
    catchError(err=>{
      console.log(err);
      return of ({data:null, errorMessage:err.message});
    })
    );
  }



}
