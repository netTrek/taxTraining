import { Component, OnDestroy, OnInit } from '@angular/core';

@Component ( {
  selector   : 'tax-countdown',
  templateUrl: './countdown.component.html',
  styleUrls  : [ './countdown.component.scss' ]
} )
export class CountdownComponent implements OnInit, OnDestroy {
  percent = 100;
  private startedIntervalID: number;

  constructor() {
  }

  ngOnInit() {

    this.startedIntervalID = window.setInterval ( () => {
      this.percent -= 5;
      if ( this.percent <= 0 ) {
        this.stopInterval ();
      }
    }, 100 );
  }

  private stopInterval() {
    if ( this.startedIntervalID ) {
      window.clearInterval ( this.startedIntervalID );
      this.startedIntervalID = undefined;
    }
  }

  ngOnDestroy(): void {
    this.stopInterval();
  }

}
