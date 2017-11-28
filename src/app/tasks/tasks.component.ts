import { Component, OnInit } from '@angular/core';
import { Task } from '../task';
import { MyService } from '../my.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  taskList: Task[] = [
    {
      description: 'Water the plants',
      completed: false
    },
    {
      description: 'Take out the trash',
      completed: false
    },
    {
      description: 'Wash the dishes',
      completed: false
    }
  ];

  constructor(private svc: MyService) {
  }

  ngOnInit(): void {
    this.svc.emitNewList(this.taskList);
    setTimeout(() => {
      this.addTask('Clean the toilets');
    }, 10000);
  }

  addTask(description: string) {
    this.taskList.push({
      description,
      completed: false
    });
    this.svc.emitNewList(this.taskList);
  }
}
