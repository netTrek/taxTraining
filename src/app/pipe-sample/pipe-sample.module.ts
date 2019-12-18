import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PipeSampleComponent } from './pipe-sample.component';
import { UtilsModule } from '../utils/utils.module';



@NgModule({
  declarations: [PipeSampleComponent],
  exports: [PipeSampleComponent],
  imports: [
    CommonModule,
    UtilsModule
  ]
})
export class PipeSampleModule { }
