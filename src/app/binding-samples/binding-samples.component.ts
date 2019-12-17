import { Component, OnInit } from '@angular/core';

@Component ( {
  selector   : 'tax-binding-samples',
  templateUrl: './binding-samples.component.html',
  styleUrls  : [ './binding-samples.component.scss' ]
} )
export class BindingSamplesComponent implements OnInit {
  labelOfText     = 'description of an article';
  catFileWithPath = 'assets/img/cat1.jpeg';
  catFile         = 'cat1.jpeg';
  html            = `<strong>hello World</strong>`;
  name            = 'saban';
  prefixValue     = 'Hello ';
  fontColor       = 'red';
  width           = 500;
  classList       = 'bind-me colored';
  isSelected      = true;
  selectdUsrInd   = 0;
  private startedIntervalID: number;
  // safe due the dom sanitizer ::: script will be removed!;
  // html            = `<strong>hello World<scrip>alert('hacked u ;)')</scrip></strong>`;
  constructor() {
  }

  ngOnInit() {
    this.startedIntervalID = window.setInterval ( () => {
      this.width -= 50;
      if ( this.width <= 200 ) {
        window.clearInterval ( this.startedIntervalID );
      }
    }, 500 );
  }

  getName( prefix: string = '' ): string {
    // console.log ( 'triggering getName' );
    return prefix + this.name;
  }

  chgImg() {
    this.catFile = 'cat2.jpeg';
  }

  toggleSelection( parma: string, mouseevent: MouseEvent ) {
    console.log ( parma, mouseevent );
    this.isSelected = !this.isSelected;
  }

  selectUsrInd( number: number ) {
    this.selectdUsrInd = number;
  }
}
