import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InjectionSamplesComponent } from './injection-samples.component';



@NgModule({
  declarations: [InjectionSamplesComponent],
  imports: [
    CommonModule
  ],
  exports: [InjectionSamplesComponent]
})
export class InjectionSamplesModule { }
