import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HeroListComponent } from './hero-list/hero-list.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';

const routes: Route[] = [
  {
    path: 'heroes', children: [
      { path: '', pathMatch: 'full', component: HeroListComponent, data: { hasQuery: false } },
      { path: 'search/:q', component: HeroListComponent, data: { hasQuery: true } },
      { path: ':id', component: HeroDetailComponent },
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class HeroesRoutingModule { }
