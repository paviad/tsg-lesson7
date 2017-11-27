import { Injectable } from '@angular/core';

export interface Observer {
  next(data: any);
}

interface Subject {
  subscribe(obs: Observer);
  unsubscribe(obs: Observer);
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

@Injectable()
export class MyService {
  mySubject: Subject = new MySubject();
}
