import { Component, EventEmitter, HostListener, OnInit, Output } from '@angular/core';

let counter = 0;

@Component ( {
  selector   : 'tax-container-sub-header',
  templateUrl: './container-sub-header.component.html',
  styleUrls  : [ './container-sub-header.component.scss' ]
} )
export class ContainerSubHeaderComponent implements OnInit {

  num = counter ++;

  @Output ()
  clicked: EventEmitter<undefined> = new EventEmitter ();

  constructor() {
  }

  ngOnInit() {
  }

  @HostListener ('click')
  clickHandler() {
    this.clicked.emit ();
  }
}
