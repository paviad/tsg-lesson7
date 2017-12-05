import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { HeroesRoutingModule } from './heroes-routing.module';

import { HeroListComponent } from './hero-list/hero-list.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroesService } from './heroes.service';
import { HeroSearchComponent } from './hero-search/hero-search.component';
import { HeroSummaryComponent } from './hero-summary/hero-summary.component';

@NgModule({
  imports: [
    CommonModule,
    HeroesRoutingModule,
    ReactiveFormsModule,
  ],
  declarations: [
    HeroListComponent,
    HeroDetailComponent,
    HeroSearchComponent,
    HeroSummaryComponent,
  ],
  exports: [
    HeroSearchComponent,
  ],
  providers: [
    HeroesService,
  ]
})
export class HeroesModule { }
