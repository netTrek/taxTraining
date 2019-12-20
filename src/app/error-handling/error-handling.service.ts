// ng g s erro-handling/erroHandling

import { Injectable } from '@angular/core';
import { BehaviorSubject, timer } from 'rxjs';

@Injectable ( {
  providedIn: 'root'
} )
export class ErrorHandlingService extends BehaviorSubject<string|undefined> {

  constructor() {
    super ( undefined );
  }

  sendError( msg: string ) {
    this.next( msg );
    timer( 2000 ).subscribe( n => this.next( undefined ) );
  }
}
