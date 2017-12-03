import { Component, OnInit } from '@angular/core';
import { Task } from '../task';
import { TasksStoreService } from '../tasks-store.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  taskList: Task[] = [];

  constructor(private svc: TasksStoreService) {
  }

  ngOnInit(): void {
    this.svc.taskList$.subscribe(r => this.taskList = r);
    setTimeout(() => {
      this.addTask('Clean the toilets');
    }, 10000);
  }

  addTask(description: string) {
    const newTask = {
      id: 0,
      description,
      completed: false
    };
    this.svc.addTask(newTask);
  }
}
