import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../heroes.service';
import { Observable } from 'rxjs/Observable';
import { Hero } from '../hero';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { switchMap, pluck, tap, map } from 'rxjs/operators';
import { combineLatest } from 'rxjs/operators/combineLatest';
import { withLatestFrom } from 'rxjs/operators/withLatestFrom';

@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.css']
})
export class HeroListComponent implements OnInit {
  heroes$: Observable<Hero[]>;
  noResults$: Observable<boolean>;

  constructor(private heroesService: HeroesService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.heroes$ = this.route.data.pipe(
      combineLatest(this.route.paramMap),
      map(([data, paramMap]) => [data.hasQuery, paramMap.get('q')]),
      switchMap(([hasQuery, q]) => hasQuery
        ? this.heroesService.searchHeroes(q)
        : this.heroesService.getHeroes())
    )
    this.noResults$ = this.heroes$.pipe(map(heroes => heroes.length == 0));
  }

  goToHero(hero: Hero) {
    this.router.navigate(['/heroes', hero.id])
  }

}
