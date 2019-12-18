import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserModule } from './user/user.module';
import { BindingSamplesModule } from './binding-samples/binding-samples.module';
import { UtilsModule } from './utils/utils.module';
import { ContentSampleModule } from './content-sample/content-sample.module';
import { ViewSampleModule } from './view-sample/view-sample.module';
import { DirectiveSampleModule } from './directive-sample/directive-sample.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UserModule,
    BindingSamplesModule,
    UtilsModule,
    ContentSampleModule,
    ViewSampleModule,
    DirectiveSampleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
