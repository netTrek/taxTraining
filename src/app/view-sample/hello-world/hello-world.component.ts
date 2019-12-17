import { Component, OnInit } from '@angular/core';
let counter = 0
@Component({
  selector: 'tax-hello-world',
  templateUrl: './hello-world.component.html',
  styleUrls: ['./hello-world.component.scss']
})
export class HelloWorldComponent implements OnInit {

  id = counter ++;

  constructor() { }

  ngOnInit() {
  }

}
