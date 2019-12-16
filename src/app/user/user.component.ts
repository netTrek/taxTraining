import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'tax-user',
  templateUrl: './user.component.html',
  styleUrls: [ './user.component.scss'],
  // encapsulation: ViewEncapsulation.None // no attribute magic
  // encapsulation: ViewEncapsulation.Emulated // attribute magic - Default
  // encapsulation: ViewEncapsulation.ShadowDom // no attribute magic - using shadowDom instead
})
export class UserComponent implements OnInit {
  name = 'Saban Ünlü';

  constructor() { }

  ngOnInit() {
  }

  chgName() {
    this.name = 'Peter Müller';
  }
}
