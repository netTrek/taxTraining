import { Component, OnInit } from '@angular/core';

@Component ( {
  selector   : 'tax-pipe-sample',
  templateUrl: './pipe-sample.component.html',
  styleUrls  : [ './pipe-sample.component.scss' ]
} )
export class PipeSampleComponent implements OnInit {

  num  = Math.PI;
  str  = 'Saban Ünlü';
  date = new Date ();
  list = [ 1,
           2,
           3
  ];
  obj = {username: 'saban', age: 44};

  constructor() {
  }

  ngOnInit() {
  }

}
