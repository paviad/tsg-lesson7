import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../hero';

@Component({
  selector: 'app-hero-summary',
  templateUrl: './hero-summary.component.html',
  styleUrls: ['./hero-summary.component.css']
})
export class HeroSummaryComponent implements OnInit {
  @Input() hero: Hero;

  constructor() { }

  ngOnInit() {
  }

}
