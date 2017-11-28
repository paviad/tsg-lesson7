import { Injectable } from '@angular/core';

export interface Observer {
  next(data: any);
}

interface Observable {
  subscribe(obs: Observer);
  unsubscribe(obs: Observer);
}

interface Subject extends Observable {
  next(data: any);
}

class MySubject implements Subject {
  subscribers: Observer[] = [];

  subscribe(obs: Observer) {
    this.subscribers.push(obs);
  }
  unsubscribe(obs: Observer) {
    const idx = this.subscribers.findIndex(v => v === obs);
    this.subscribers.splice(idx, 1);
  }
  next(data: any) {
    this.subscribers.forEach(x => x.next(data));
  }
}

class MyBehaviorSubject extends MySubject {
  constructor(private lastValue?: any) {
    super();
  }

  subscribe(obs: Observer) {
    if (this.lastValue) {
      obs.next(this.lastValue);
    }
    super.subscribe(obs);
  }

  next(data: any) {
    this.lastValue = data;
    super.next(data);
  }
}

@Injectable()
export class MyService {
  private newListInternal: Subject = new MyBehaviorSubject();
  private newTaskInternal: Subject = new MySubject();
  private deletedTaskInternal: Subject = new MySubject();
  public newList: Observable;
  public newTask: Observable;
  public deletedTask: Observable;

  constructor() {
    this.newList = this.asObservable(this.newListInternal);
    this.newTask = this.asObservable(this.newTaskInternal);
    this.deletedTask = this.asObservable(this.deletedTaskInternal);
  }

  emitNewList(data: any) {
    this.newListInternal.next(data);
  }

  emitNewTask(data: any) {
    this.newTaskInternal.next(data);
  }

  emitDeletedTask(data: any) {
    this.deletedTaskInternal.next(data);
  }

  private asObservable(subj: Subject): Observable {
    return {
      subscribe: obs => subj.subscribe(obs),
      unsubscribe: obs => subj.unsubscribe(obs)
    }
  }
}
