import { Component, OnInit } from '@angular/core';
import { TaskDataService } from './task-data.service';
import { Tasksdata } from './task';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
arr:Tasksdata[] = [];
  constructor(private _route:Router ,private _data:TaskDataService) { }

  ngOnInit() {

    this._data.getTasks().subscribe(
      (data:Tasksdata[]) => {
        this.arr = data;
      }
    );
  }

  OnEdit(item:Tasksdata){
    this._route.navigate(["/editTask",item.Id]);

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
