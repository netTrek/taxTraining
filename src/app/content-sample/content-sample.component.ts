import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'tax-content-sample',
  templateUrl: './content-sample.component.html',
  styleUrls: ['./content-sample.component.scss']
})
export class ContentSampleComponent implements OnInit {

  someVal = 'hello world';

  constructor() { }

  ngOnInit() {
  }

}
