import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TaskDataService } from '../task-data.service';
import { Tasksdata } from '../task';

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.css']
})
export class EditTaskComponent implements OnInit {

  id:string="";
  title:string="";
  status:string = "";

  arr:Tasksdata[] = [];

  constructor(private _active:ActivatedRoute, private _data:TaskDataService) { }

  ngOnInit() {
  this.id = this._active.snapshot.params["Id"];
  this._data.getTaskbyId(this.id).subscribe(
    (data:Tasksdata[]) => {
      this.title = data[0].Title;
      this.status = data[0].Status;
    }
  );
  }
  OnEditTask(f){
    this._data.edittask(f.value).subscribe(
      (data:any) => {
        alert("Data Updated!");
      }
    );

  }


}
