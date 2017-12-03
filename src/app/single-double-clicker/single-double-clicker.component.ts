import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { timer } from 'rxjs/observable/timer';
import { merge } from 'rxjs/observable/merge';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { MessageService } from '../message.service';
import { exhaustMap, debounceTime, buffer, map, tap, first, publish, finalize } from 'rxjs/operators';

@Component({
  selector: 'app-single-double-clicker',
  templateUrl: './single-double-clicker.component.html',
  styles: []
})
export class SingleDoubleClickerComponent implements OnInit, OnDestroy {
  clickSubject = new Subject<any>();
  click$ = this.clickSubject.asObservable();
  trigger$: Observable<any>;
  buffer$: Observable<any[]>;
  multiclick$: Observable<number>;

  sub: Subscription;

  constructor(private messageService: MessageService) {
  }

  ngOnInit() {
    const raceGenerator = ev => merge(this.click$, timer(250)).pipe(first());
    this.trigger$ = this.click$.pipe(exhaustMap(raceGenerator));
    this.buffer$ = this.click$.pipe(buffer(this.trigger$));
    this.multiclick$ = this.buffer$.pipe(map(r => r.length));
    
    this.sub = this.multiclick$.subscribe(r => this.messageService.log(`SingleDoubleClicker - Number of clicks: ${r}`));
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
