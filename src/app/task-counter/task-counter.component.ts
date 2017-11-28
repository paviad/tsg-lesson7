import { Component, OnInit } from '@angular/core';
import { Observer, MyService } from '../my.service';
import { Task } from '../task';

@Component({
  selector: 'app-task-counter',
  templateUrl: 'task-counter.component.html',
  styles: []
})
export class TaskCounterComponent implements OnInit {
  counter;

  constructor(private svc: MyService) { }

  ngOnInit() {
    this.svc.newList.subscribe({
      next: data => this.counter = data.length
    });
    this.svc.newTask.subscribe({
      next: data => this.counter++
    });
    this.svc.deletedTask.subscribe({
      next: data => this.counter--
    });
  }
}
