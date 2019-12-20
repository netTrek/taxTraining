// ng g m erroHandling --module app
// ng g c erro-handling/erroHandling --export --flat

import { Component, OnInit } from '@angular/core';
import { ErrorHandlingService } from './error-handling.service';

@Component({
  selector: 'tax-error-handling',
  templateUrl: './error-handling.component.html',
  styleUrls: [ './error-handling.component.scss']
})
export class ErrorHandlingComponent implements OnInit {

  constructor( public errorHandling$: ErrorHandlingService ) { }

  ngOnInit() {
  }

}
