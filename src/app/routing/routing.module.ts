import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';
import { CommonModule } from '@angular/common';
import { TasksComponent } from '../tasks/tasks.component';

const routes: Route[] = [
  { path: 'tasks', component: TasksComponent },
  { path: '', pathMatch: 'full', redirectTo: '/tasks' },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class RoutingModule { }
