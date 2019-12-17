import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewSampleComponent } from './view-sample.component';
import { HelloWorldComponent } from './hello-world/hello-world.component';



@NgModule({
  declarations: [ViewSampleComponent, HelloWorldComponent],
  imports: [
    CommonModule
  ],
  exports: [ViewSampleComponent]
})
export class ViewSampleModule { }
