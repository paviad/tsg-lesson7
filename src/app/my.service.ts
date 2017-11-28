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
  private mySubjectInternal: Subject = new MyBehaviorSubject();
  public mySubject: Observable;

  constructor() {
    this.mySubject = this.asObservable(this.mySubjectInternal);
  }

  emitNewList(data: any) {
    this.mySubjectInternal.next(data);
  }

  private asObservable(subj: Subject): Observable {
    return {
      subscribe: obs => subj.subscribe(obs),
      unsubscribe: obs => subj.unsubscribe(obs)
    }
  }
}
