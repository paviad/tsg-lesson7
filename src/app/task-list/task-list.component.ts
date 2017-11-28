import { Component, OnInit } from '@angular/core';
import { Task } from '../task';
import { TasksStoreService } from '../tasks-store.service';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-task-list',
  templateUrl: 'task-list.component.html',
  styles: []
})
export class TaskListComponent implements OnInit {
  taskList: Task[];

  constructor(private svc: TasksStoreService) { }

  ngOnInit() {
    this.svc.taskList$.subscribe(r => this.taskList = r);
  }

  deleteTask(t: Task) {
    this.svc.deleteTask(t);
  }

  toggleCompleted(t: Task) {
    this.svc.toggleCompleted(t);
  }
}
