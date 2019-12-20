import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestingSampleComponent } from './testing-sample.component';



@NgModule({
  declarations: [TestingSampleComponent],
  imports: [
    CommonModule
  ],
  exports: [TestingSampleComponent]
})
export class TestingSampleModule { }
