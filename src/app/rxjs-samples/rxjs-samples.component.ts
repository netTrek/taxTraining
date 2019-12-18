import { Component, OnInit } from '@angular/core';
import { Sender } from './sender';
import { Receiver } from './receiver';
import { IntervalObs } from './interval-obs';

@Component({
  selector: 'tax-rxjs-samples',
  templateUrl: './rxjs-samples.component.html',
  styleUrls: ['./rxjs-samples.component.scss']
})
export class RxjsSamplesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.playingOldSchoolStyle();
  }

  private playingOldSchoolStyle() {

    new IntervalObs().registerObserver({
      receive: ( value: any ) => console.log ( value )
    });

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
