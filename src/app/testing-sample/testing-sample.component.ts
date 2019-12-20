import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'tax-testing-sample',
  templateUrl: './testing-sample.component.html',
  styleUrls: ['./testing-sample.component.scss']
})
export class TestingSampleComponent implements OnInit {

  name = 'saban';

  constructor() { }

  ngOnInit() {
  }

}
