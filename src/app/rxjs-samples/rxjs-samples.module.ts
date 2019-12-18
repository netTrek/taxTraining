import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RxjsSamplesComponent } from './rxjs-samples.component';



@NgModule({
  declarations: [RxjsSamplesComponent],
  imports: [
    CommonModule
  ],
  exports: [RxjsSamplesComponent]
})
export class RxjsSamplesModule { }
