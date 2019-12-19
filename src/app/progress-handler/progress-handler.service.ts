import { Injectable } from '@angular/core';
import { BehaviorSubject, timer } from 'rxjs';

@Injectable ( {
  providedIn: 'root'
} )
export class ProgressHandlerService extends BehaviorSubject<number> {

  constructor() {
    super ( 0 );
  }

  increment(): void {
    this.next ( this.value + 1 );
  }

  decrement(): void {
    timer ( 500 )
      .subscribe ( n => this.next ( this.value - 1 ) );
  }
}
