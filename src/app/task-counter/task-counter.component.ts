import { Component, OnInit } from '@angular/core';
import { Task } from '../task';
import { TasksStoreService } from '../tasks-store.service';

@Component({
  selector: 'app-task-counter',
  templateUrl: 'task-counter.component.html',
  styles: []
})
export class TaskCounterComponent implements OnInit {
  counter;

  constructor(private svc: TasksStoreService) { }

  ngOnInit() {
    this.svc.taskList$.subscribe(r => this.counter = r.length);
  }
}
