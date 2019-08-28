import { Component } from '@angular/core';
import { Router, NavigationStart, NavigationCancel, NavigationEnd, NavigationError } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TasksApp';
isloadingbar:boolean=false;

color = 'primary';
mode = 'indeterminate';
value = 50;


 public constructor(_route:Router){
    this.checkRouting(_route);
 }

checkRouting(_route:Router){
   _route.events.subscribe(
     x=> {
       if(x instanceof NavigationStart){
         this.isloadingbar = true;
       }
       if(x instanceof NavigationCancel ||
          x instanceof NavigationEnd ||
          x instanceof NavigationError){
            this.isloadingbar = false;
          }
     }
   );
}

}
