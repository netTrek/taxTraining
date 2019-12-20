import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { AbstractControl, NgModel } from '@angular/forms';

@Component({
  selector: 'tax-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit, AfterViewInit {

  @ViewChild('email', { static: false })
  mail: NgModel;

  constructor() { }

  ngOnInit() {
  }

  sendData( formModel: any ) {
    console.log ( formModel );
  }

  ngAfterViewInit(): void {
    console.log ( 'sa',  this.mail, this.mail.value,
      /*this.mail.control.setValue('us@netTrek.de') */);
  }
}
