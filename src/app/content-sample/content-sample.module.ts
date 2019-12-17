import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentSampleComponent } from './content-sample.component';
import { ContainerComponent } from './container/container.component';
import { ContainerHeaderComponent } from './container/container-header/container-header.component';
import { ContainerBodyComponent } from './container/container-body/container-body.component';
import { ContainerSubHeaderComponent } from './container/container-sub-header/container-sub-header.component';



@NgModule({
  declarations: [ContentSampleComponent, ContainerComponent, ContainerHeaderComponent, ContainerBodyComponent, ContainerSubHeaderComponent],
  imports: [
    CommonModule
  ],
  exports: [ContentSampleComponent]
})
export class ContentSampleModule { }
