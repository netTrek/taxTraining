import { Component, OnInit } from '@angular/core';
import { Sender } from './sender';
import { Receiver } from './receiver';
import { IntervalObs } from './interval-obs';
import { BehaviorSubject, from, fromEvent, interval, Observable, of, range, Subject, Subscription } from 'rxjs';
import { nextTick } from 'q';
import { find, map } from 'rxjs/operators';

@Component ( {
  selector   : 'tax-rxjs-samples',
  templateUrl: './rxjs-samples.component.html',
  styleUrls  : [ './rxjs-samples.component.scss' ]
} )
export class RxjsSamplesComponent implements OnInit {

  myValues$: Observable<number> = interval( 100 );

  constructor() {
  }

  ngOnInit() {
    // this.playingOldSchoolStyle();
    // this.initOfSample ();
    // this.initFromSample ();
    // this.initRangeSample ();
    // this.initFromEvent ();
    // this.initSubjectSample();
    // this.initBehaviorSubjectSample();
    this.initNewSample();
  }

  private initNewSample() {
    const observable: Observable<number> = new Observable(subscriber => {
      let counter = 0;
      console.log ( 'observable is running' );
      const intervalId = window.setInterval( () => {
        subscriber.next( counter ++ );
        console.log ( 'still working', counter );
        if ( counter === 10 ) {
          subscriber.complete();
        }
      }, 100 );
      return () => {
        window.clearInterval( intervalId );
      };
      /*
      subscriber.next( 1 );
      subscriber.error('ups somthing goes wrong');
      subscriber.next( 2 );
      subscriber.next( 3 );
      subscriber.complete();
      */
    });

    this.addSubscription( observable );
  }

  private initSubjectSample() {
    const sub: Subject<number> = new Subject();
    this.addSubscription( sub, '1#sub ' );
    sub.next( 1 );
    sub.next( 2 );
    this.addSubscription( sub, '2#sub ' );
    sub.next( 3 );
    sub.next( 4 );
  }

  private initBehaviorSubjectSample() {
    const sub: BehaviorSubject<number> = new BehaviorSubject( 0 );
    this.addSubscription( sub, '1#sub ' );
    sub.next( 1 );
    sub.next( 2 );
    this.addSubscription( sub, '2#sub ' );
    sub.next( 3 );
    sub.next( 4 );
  }

  private initFromEvent () {
    const observable: Observable<number> = fromEvent<MouseEvent>( document, 'mousemove').pipe(
      map( event => event.clientY ),
      find( y => y < 10 )
    );
    this.addSubscription ( observable, 'do not leave me please' );
  }

  private initRangeSample() {
    // of ( 1 ).subscribe(
    const observable: Observable<number> = range( 5, 5 );
    this.addSubscription ( observable, '1#' );
  }

  private initFromSample() {
    // of ( 1 ).subscribe(
    const observable: Observable<number> = from ( [1, 2, 3, 4] );
    this.addSubscription ( observable, '1#' );
  }

  private initOfSample() {
    // of ( 1 ).subscribe(
    const observable: Observable<number> = of ( 1, 2, 3, 4 );
    this.addSubscription ( observable, '1#' );
    this.addSubscription ( observable, '2#' );
  }

  private addSubscription( observable: Observable<any>, prefix: string = '' ): Subscription {
    return observable.subscribe (
      next => console.log ( prefix, next ),
      error => console.error ( prefix, error ),
      () => console.log ( prefix, 'completed' )
    );
  }

  private playingOldSchoolStyle() {

    new IntervalObs ().registerObserver ( {
      receive: ( value: any ) => console.log ( value )
    } );

    // const chat: Sender = new Sender();
    //
    // const user: Receiver = new Receiver();
    //
    // chat.registerObserver( user );
    // chat.registerObserver( {
    //   receive: value => console.log ( value )
    // } );
    // chat.registerObserver( {
    //   receive: value => console.log ( value )
    // } );
    // chat.registerObserver( {
    //   receive: value => console.log ( value )
    // } );
    // chat.registerObserver( {
    //   receive: value => console.log ( value )
    // } );
    // chat.send( 'hello world1' );
    // chat.send( 'hello world2' );
    // chat.send( 'hello world3' );
    // chat.send( 'hello world4' );
  }
}
