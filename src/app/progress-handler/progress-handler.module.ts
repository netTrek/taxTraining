import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProgressHandlerComponent } from './progress-handler/progress-handler.component';



@NgModule({
  declarations: [ProgressHandlerComponent],
  imports: [
    CommonModule
  ],
  exports: [ProgressHandlerComponent]
})
export class ProgressHandlerModule { }
