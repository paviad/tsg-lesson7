import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hero-search',
  templateUrl: './hero-search.component.html',
  styleUrls: ['./hero-search.component.css']
})
export class HeroSearchComponent implements OnInit {
  form: FormGroup;

  constructor(private fb: FormBuilder,
    private router: Router) {
    this.form = fb.group({
      q: ''
    });
  }

  ngOnInit() {
  }

  doSearch(q: string) {
    this.router.navigate(['/heroes/search', q]);
  }
}
