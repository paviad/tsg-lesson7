import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Hero } from './hero';

@Injectable()
export class HeroesService {

  constructor(private http: HttpClient) { }

  searchHeroes(q: string) {
    return this.http.get<Hero[]>('/api/heroes', { params: { q } });
  }

  getHeroes() {
    return this.http.get<Hero[]>('/api/heroes');
  }

  getHero(id: number) {
    return this.http.get<Hero>(`/api/heroes/${id}`);
  }
}
