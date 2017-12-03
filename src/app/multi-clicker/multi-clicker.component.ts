import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import { debounceTime, buffer, map, scan, tap } from 'rxjs/operators';
import { MessageService } from '../message.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-multi-clicker',
  templateUrl: './multi-clicker.component.html'
})
export class MultiClickerComponent implements OnInit, OnDestroy {
  click$ = new Subject<any>();
  trigger$: Observable<any>;
  buffer$: Observable<any[]>;
  multiclick$: Observable<number>;

  sub: Subscription;

  constructor(private messageService: MessageService) { }

  ngOnInit() {
    this.trigger$ = this.click$.pipe(debounceTime(250));
    this.buffer$ = this.click$.pipe(buffer(this.trigger$));
    this.multiclick$ = this.buffer$.pipe(map(r => r.length));

    this.sub = this.multiclick$.subscribe(r => this.messageService.log(`MultiClicker - Number of clicks: ${r}`));
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
