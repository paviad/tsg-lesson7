import { Injectable } from '@angular/core';
import { Task } from './task';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

interface WritableTask {
  id: number;
  description: string;
  completed: boolean;
}

@Injectable()
export class TasksStoreService {
  private nextId = 4;
  private taskList: WritableTask[] = [
    {
      id: 1,
      description: 'Water the plants',
      completed: false
    },
    {
      id: 2,
      description: 'Take out the trash',
      completed: false
    },
    {
      id: 3,
      description: 'Wash the dishes',
      completed: false
    }
  ];

  private taskListSubject: BehaviorSubject<Task[]> = new BehaviorSubject<Task[]>([]);

  public taskList$: Observable<Task[]>;

  constructor() {
    this.taskList$ = this.taskListSubject.asObservable();
    this.notifyAllObservers();
  }

  public addTask(task: Task): number {
    const newTask = this.deepCloneTask(task);
    newTask.id = this.nextId++;
    this.taskList.push(newTask);
    this.notifyAllObservers();
    return newTask.id;
  }

  public deleteTask(task: Task) {
    const idx = this.taskList.findIndex(r => r.id == task.id);
    if (idx != -1) {
      this.taskList.splice(idx, 1);
      this.notifyAllObservers();
    }
  }

  public toggleCompleted(task: Task): boolean {
    const privateTask = this.taskList.find(r => r.id == task.id);
    privateTask.completed = !privateTask.completed;
    this.notifyAllObservers();
    return privateTask.completed;
  }

  private notifyAllObservers() {
    this.taskListSubject.next(this.deepCloneTaskList(this.taskList));
  }

  private deepCloneTask(task: WritableTask): WritableTask {
    return { ...task };
  }

  private deepCloneTaskList(taskList: Task[]): Task[] {
    return taskList.map(r => this.deepCloneTask(r));
  }
}
