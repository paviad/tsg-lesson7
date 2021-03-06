import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { MaterialModule } from './material/material.module';
import { RoutingModule } from './routing/routing.module';
import { HeroesModule } from './heroes/heroes.module';

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
import { SingleDoubleClickerComponent } from './single-double-clicker/single-double-clicker.component';

@NgModule({
  declarations: [
    AppComponent,
    TaskListComponent,
    TaskCounterComponent,
    TasksComponent,
    MultiClickerComponent,
    ClickersComponent,
    MessagesComponent,
    SingleDoubleClickerComponent,
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    RoutingModule,
    HttpClientModule,
    HeroesModule,
  ],
  providers: [
    MyService,
    TasksStoreService,
    MessageService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
