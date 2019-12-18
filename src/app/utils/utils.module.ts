import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountdownComponent } from './countdown/countdown.component';
import { DangerBtnDirective } from './danger-btn/danger-btn.directive';
import { ReversePipe } from './reverse/reverse.pipe';



@NgModule({
  declarations: [CountdownComponent, DangerBtnDirective, ReversePipe],
  imports: [
    CommonModule
  ],
  exports: [CountdownComponent, DangerBtnDirective, ReversePipe]
})
export class UtilsModule { }
