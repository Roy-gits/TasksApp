import { Component, OnInit } from '@angular/core';
import { TaskDataService } from './task-data.service';
import { Tasksdata,  Taskresolved } from './task';
import { Route, Router,  ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})

export class TasksComponent implements OnInit {
arr:Tasksdata[] = [];
taskData:Taskresolved;
errorMessage:string='';
  constructor(private _route:Router ,private _data:TaskDataService, private _active:ActivatedRoute) {

     this.taskData =  this._active.snapshot.data["taskdata"];
     console.log(this.taskData);
   }

  ngOnInit() {

    this.arr = this.taskData.data;
    this.errorMessage = this.taskData.errormessage;

    // this._data.getTasks().subscribe(
    //   (data:Tasksdata[]) => {
    //     this.arr = data;
    //   }
    // );
  }

  OnEdit(item:Tasksdata){
    this._route.navigate(["/tasks/editTask",item.Id]);

  }

  OnDelete(item:Tasksdata){
    this._data.deletetask(item.Id).subscribe(
      (data:any) => {
        this.arr.splice(this.arr.indexOf(item), 1);
        alert("Record Deleted!");
      }
    );
  }

}
