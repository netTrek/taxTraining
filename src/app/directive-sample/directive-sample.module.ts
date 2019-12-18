import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DirectiveSampleComponent } from './directive-sample/directive-sample.component';



@NgModule( {
  declarations: [ DirectiveSampleComponent ],
  exports     : [
    DirectiveSampleComponent
  ],
  imports     : [
    CommonModule
  ]
})
export class DirectiveSampleModule { }
