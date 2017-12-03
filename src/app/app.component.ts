import { Component, OnInit } from '@angular/core';
import { Task } from './task';
import { TasksStoreService } from './tasks-store.service';
import { MessageService } from './message.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styles: []
})
export class AppComponent implements OnInit {
  messages$: Observable<string[]>;

  constructor(private messageService: MessageService) {
  }

  ngOnInit(): void {
    this.messages$ = this.messageService.messages$;
  }
}
