import { AfterContentInit, Component, ContentChild, ContentChildren, OnInit, QueryList } from '@angular/core';
import { ContainerHeaderComponent } from './container-header/container-header.component';
import { ContainerSubHeaderComponent } from './container-sub-header/container-sub-header.component';

@Component({
  selector: 'tax-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss']
})
export class ContainerComponent implements OnInit, AfterContentInit {

  @ContentChild(ContainerHeaderComponent, {static: true})
  header: ContainerHeaderComponent;

  @ContentChildren(ContainerSubHeaderComponent)
  subHeaders: QueryList<ContainerSubHeaderComponent>;

  constructor() { }

  ngOnInit() {
    console.log ( this.header );
  }

  ngAfterContentInit(): void {
    this.subHeaders.toArray().forEach( subHeader => {
      subHeader.clicked.subscribe( () => {
        console.log ( 'header', subHeader.num, ' was clicker' );
      });
    });
  }

}
