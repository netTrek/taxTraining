import { Component, OnInit } from '@angular/core';

@Component ( {
  selector   : 'tax-directive-sample',
  templateUrl: './directive-sample.component.html',
  styleUrls  : [ './directive-sample.component.scss' ]
} )
export class DirectiveSampleComponent implements OnInit {

  showImage       = true;
  catFileWithPath = 'assets/img/cat1.jpeg';
  users           = [ 1,
                      2,
                      3,
                      4
  ];
  classList = 'bold underlined';

  constructor() {
  }

  ngOnInit() {
  }

  toggle() {
    this.showImage = !this.showImage;
  }
}
