import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PipeSampleComponent } from './pipe-sample.component';



@NgModule({
  declarations: [PipeSampleComponent],
  exports: [PipeSampleComponent],
  imports: [
    CommonModule
  ]
})
export class PipeSampleModule { }
