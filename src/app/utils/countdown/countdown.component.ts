import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';
import { take } from 'rxjs/operators';

@Component ( {
  selector   : 'tax-countdown',
  templateUrl: './countdown.component.html',
  styleUrls  : [ './countdown.component.scss' ]
} )
export class CountdownComponent implements OnInit, OnDestroy {
  percent = 100;
  private subscription: Subscription;
  // private startedIntervalID: number;

  constructor() {
  }

  ngOnInit() {

    this.subscription = interval( 100 )
      .pipe(
        take ( 20 )
      )
      .subscribe(
        next => this.percent -= 5,
        error => console.error ( 'error value is' , error ),
        () => console.log ( 'I am ready now ...')
      );

    // window.setTimeout( () => {
    //   this.subscription.unsubscribe();
    // }, 500 )

    // this.startedIntervalID = window.setInterval ( () => {
    //   this.percent -= 5;
    //   if ( this.percent <= 0 ) {
    //     this.stopInterval ();
    //   }
    // }, 100 );
  }

  // private stopInterval() {
  //   // if ( this.startedIntervalID ) {
  //   //   window.clearInterval ( this.startedIntervalID );
  //   //   this.startedIntervalID = undefined;
  //   // }
  // }

  ngOnDestroy(): void {
    // this.stopInterval();
    this.subscription.unsubscribe();
  }

}
