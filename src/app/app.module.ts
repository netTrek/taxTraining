import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserModule } from './user/user.module';
import { BindingSamplesModule } from './binding-samples/binding-samples.module';
import { UtilsModule } from './utils/utils.module';
import { ContentSampleModule } from './content-sample/content-sample.module';
import { ViewSampleModule } from './view-sample/view-sample.module';
import { DirectiveSampleModule } from './directive-sample/directive-sample.module';
import { PipeSampleModule } from './pipe-sample/pipe-sample.module';

import localeData4SQ from '../locales/sq';
import localeData4DE from '@angular/common/locales/de';
import { registerLocaleData } from '@angular/common';
import { ReversePipe } from './utils/reverse/reverse.pipe';
import { RxjsSamplesModule } from './rxjs-samples/rxjs-samples.module';
import { AppServiceToDeleteLater } from './app.service.to-delete-later';

registerLocaleData( localeData4SQ );
registerLocaleData( localeData4DE );

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
    DirectiveSampleModule,
    PipeSampleModule,
    RxjsSamplesModule
  ],
  providers: [
    {provide: LOCALE_ID, useValue: 'sq'},
    AppServiceToDeleteLater
  ],
  bootstrap: [AppComponent],
  exports: [ReversePipe]
})
export class AppModule { }
