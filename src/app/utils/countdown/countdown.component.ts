import { Component, OnInit } from '@angular/core';

@Component ( {
  selector   : 'tax-countdown',
  templateUrl: './countdown.component.html',
  styleUrls  : [ './countdown.component.scss' ]
} )
export class CountdownComponent implements OnInit {
  percent = 100;
  private startedIntervalID: number;

  constructor() {
  }

  ngOnInit() {
    this.startedIntervalID = window.setInterval ( () => {
      this.percent -= 1;
      if ( this.percent <= 0 ) {
        this.stopInterval ();
      }
    }, 1000 );
  }

  private stopInterval() {
    window.clearInterval ( this.startedIntervalID );
  }

}
