import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'tax-container-header',
  templateUrl: './container-header.component.html',
  styleUrls: ['./container-header.component.scss']
})
export class ContainerHeaderComponent implements OnInit {

  someInfos = 'i am a header';

  constructor() { }

  ngOnInit() {
  }

}
