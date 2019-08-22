import { Component, OnInit } from '@angular/core';
import { TaskDataService } from '../task-data.service';
import { Tasksdata } from '../task';

@Component({
  selector: 'app-addtasks',
  templateUrl: './addtasks.component.html',
  styleUrls: ['./addtasks.component.css']
})
export class AddtasksComponent implements OnInit {

  constructor(private _data:TaskDataService) { }

  arr:Tasksdata[] = [];

  ngOnInit() {
  }

  OnAddTask(f){
   //console.log(f.value);

   return this._data.addTasks(f.value).subscribe(
     (data:any) => {
       this.arr = data;
       alert("Record Added!");
     }

   );
  }

}
