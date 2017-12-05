import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../heroes.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { pluck, switchMap, tap } from 'rxjs/operators';
import { Hero } from '../hero';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  hero$: Observable<Hero>;

  constructor(private heroesService: HeroesService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.hero$ = this.route.paramMap.pipe(
      tap(console.log),
      pluck<ParamMap, number>('params', 'id'),
      switchMap(id => this.heroesService.getHero(id))
    );
  }

}
