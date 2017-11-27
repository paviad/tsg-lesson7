import { Component, OnInit } from '@angular/core';
import { Observer, MyService } from '../my.service';
import { Task } from '../task';

@Component({
  selector: 'app-task-counter',
  templateUrl: 'task-counter.component.html',
  styles: []
})
export class TaskCounterComponent implements OnInit, Observer {
  counter;

  constructor(private svc: MyService) { }

  ngOnInit() {
    this.svc.mySubject.subscribe(this);
  }

  next(data: Task[]) {
    this.counter = data.length;
  }
}
