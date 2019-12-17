import { AfterViewInit, Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { HelloWorldComponent } from './hello-world/hello-world.component';

@Component({
  selector: 'tax-view-sample',
  templateUrl: './view-sample.component.html',
  styleUrls: ['./view-sample.component.scss']
})
export class ViewSampleComponent implements OnInit, AfterViewInit {

  @ViewChild( HelloWorldComponent , { static: true } )
  helloWord: HelloWorldComponent;

  @ViewChild( HelloWorldComponent , { static: true, read: ElementRef } )
  helloWordElemRef: ElementRef<HTMLElement>;

  @ViewChild( 'line' , { static: true } )
  lineElemRef: ElementRef<HTMLHRElement>;

  @ViewChildren( HelloWorldComponent )
  helloWords: QueryList<HelloWorldComponent>;

  constructor() { }
  ngOnInit() {
    console.log ( this.helloWord, this.helloWordElemRef, this.lineElemRef.nativeElement );
    this.helloWordElemRef.nativeElement.style.color = 'red';
    this.lineElemRef.nativeElement.style.borderColor = 'red';
  }
  ngAfterViewInit(): void {
    console.log ( this.helloWords.toArray() );
  }

}
