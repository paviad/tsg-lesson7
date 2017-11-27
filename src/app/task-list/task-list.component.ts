import { Component, OnInit } from '@angular/core';
import { MyService, Observer } from '../my.service';
import { Task } from '../task';

@Component({
  selector: 'app-task-list',
  templateUrl: 'task-list.component.html',
  styles: []
})
export class TaskListComponent implements OnInit, Observer {
  taskList: Task[];

  constructor(private svc: MyService) { }

  ngOnInit() {
    this.svc.mySubject.subscribe(this)
  }

  next(data: Task[]) {
    this.taskList = data;
  }

  deleteTask(t: Task) {
    const idx = this.taskList.findIndex(x => x === t);
    if (idx != -1) this.taskList.splice(idx, 1);
  }
}
