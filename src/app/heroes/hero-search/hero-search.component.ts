import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { debounceTime, switchMap, map, filter } from 'rxjs/operators';
import { HeroesService } from '../heroes.service';
import { Hero } from '../hero';

@Component({
  selector: 'app-hero-search',
  templateUrl: './hero-search.component.html',
  styleUrls: ['./hero-search.component.css']
})
export class HeroSearchComponent implements OnInit {
  form: FormGroup;
  options$: Observable<string[]>;

  constructor(private fb: FormBuilder,
    private heroesService: HeroesService,
    private router: Router) {
    this.form = fb.group({
      q: ''
    });
  }

  ngOnInit() {
    const value$ = this.form.controls['q'].valueChanges;
    this.options$ = value$.pipe(
      filter(q => q.length >= 2),
      debounceTime(250),
      switchMap(q =>
        this.heroesService.searchHeroes(q).pipe(
          map(list => [list, q])
        )
      ),
      map(([list, q]) => list.map(
        hero => this.suggestion(hero, q)).slice(0, 5)
      )
    );
  }

  suggestion(hero: Hero, q: string) {
    const lq = q.toLowerCase();
    for (let key in hero) {
      if (key == 'id') continue;
      if (hero[key].toLowerCase().includes(lq)) {
        return hero[key];
      }
    }
  }

  doSearch(q: string) {
    this.router.navigate(['/heroes/search', q]);
  }
}
