import { Component, OnInit } from '@angular/core';
import { ProgressHandlerService } from '../progress-handler.service';

@Component({
  selector: 'tax-progress-handler',
  template: `
    <ng-container *ngIf="progress$ | async as counter">
      <span *ngIf="counter>0">...loading Data {{counter}}</span>
    </ng-container>
  `,
  styleUrls: ['./progress-handler.component.scss']
})
export class ProgressHandlerComponent implements OnInit {

  constructor( public progress$: ProgressHandlerService ) { }

  ngOnInit() {
  }

}
