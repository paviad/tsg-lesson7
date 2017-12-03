import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class MessageService {
  private messages: string[] = [];
  private messagesSubject = new BehaviorSubject<string[]>([]);
  public messages$ = this.messagesSubject.asObservable();

  constructor() { }

  log(message: string) {
    this.messages.push(message);
    this.messagesSubject.next(this.messages);
  }

}
