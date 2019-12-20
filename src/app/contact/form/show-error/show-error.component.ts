import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'tax-show-error',
  templateUrl: './show-error.component.html',
  styleUrls: ['./show-error.component.scss'],
})
export class ShowErrorComponent implements OnInit {

  @Input()
  controlerName: string;

  @Input()
  group: FormGroup;

  ctrl: AbstractControl;

  constructor() { }

  ngOnInit() {
    this.ctrl = this.group.get ( this.controlerName );
  }

}
