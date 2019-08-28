import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { resolved } from './user';
import { Observable, of } from 'rxjs';
import { UserDataService } from './user-data.service';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserResolveService implements Resolve<resolved> {

  constructor(private _data:UserDataService) { }

  resolve(route:ActivatedRouteSnapshot, state:RouterStateSnapshot):Observable<any>{
     return this._data.getUsers().pipe(
       map(x=>({data:x, errormessage:''})
     ),
     catchError(err=>{
       console.log(err);
       return of ({data:null, errorMessage:err.message});
     })
     );
}
}
