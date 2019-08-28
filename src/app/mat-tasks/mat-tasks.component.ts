import { Component, OnInit, ViewChild } from '@angular/core';
import { TaskDataService } from '../tasks/task-data.service';
import { Tasksdata } from '../tasks/task';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';

@Component({
  selector: 'app-mat-tasks',
  templateUrl: './mat-tasks.component.html',
  styleUrls: ['./mat-tasks.component.css']
})
export class MatTasksComponent implements OnInit {

  array: Tasksdata[] = [];
  dataSource = new  MatTableDataSource<Tasksdata>();
  displayedColumns: string[] = ['Id', 'Title', 'Status'];
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  constructor(private _data: TaskDataService) {
    this._data.getTasks().subscribe(
      (data: Tasksdata[]) => {
        this.dataSource.data = data;
      }
    );

  }

  ngOnInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}
