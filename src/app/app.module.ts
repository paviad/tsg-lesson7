import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterialModule } from './material/material.module';
import { RoutingModule } from './routing/routing.module';

import { AppComponent } from './app.component';
import { MyService } from './my.service';
import { TaskListComponent } from './task-list/task-list.component';
import { TaskCounterComponent } from './task-counter/task-counter.component';
import { TasksComponent } from './tasks/tasks.component';
import { TasksStoreService } from './tasks-store.service';
import { MultiClickerComponent } from './multi-clicker/multi-clicker.component';
import { MessageService } from './message.service';
import { ClickersComponent } from './clickers/clickers.component';
import { MessagesComponent } from './messages/messages.component';

@NgModule({
  declarations: [
    AppComponent,
    TaskListComponent,
    TaskCounterComponent,
    TasksComponent,
    MultiClickerComponent,
    ClickersComponent,
    MessagesComponent,
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    RoutingModule,
  ],
  providers: [
    MyService,
    TasksStoreService,
    MessageService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
