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
import { ErrorHandlingModule } from './error-handling/error-handling.module';
import { InjectionSamplesModule } from './injection-samples/injection-samples.module';
import { DEV_NAME, TEAM_NAMES } from './injection-samples/MyCustomInjectionTokens';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AppAuthInterceptorService } from './app-auth-interceptor.service';
import { AppProgressInterceptorService } from './app-progress-interceptor.service';
import { ProgressHandlerModule } from './progress-handler/progress-handler.module';
import { HomeModule } from './home/home.module';
import { ContactModule } from './contact/contact.module';
import { TestingSampleModule } from './testing-sample/testing-sample.module';

registerLocaleData ( localeData4SQ );
registerLocaleData ( localeData4DE );

@NgModule ( {
  declarations: [
    AppComponent
  ],
  imports     : [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    HttpClientModule,
    UserModule,
    BindingSamplesModule,
    UtilsModule,
    ContentSampleModule,
    ViewSampleModule,
    DirectiveSampleModule,
    PipeSampleModule,
    RxjsSamplesModule,
    ErrorHandlingModule,
    InjectionSamplesModule,
    ProgressHandlerModule,
    ContactModule,
    TestingSampleModule
  ],
  providers   : [
    { provide: LOCALE_ID, useValue: 'sq' },
    // {provide: 'saban', useValue: 'saban ünlü'},
    {
      provide : HTTP_INTERCEPTORS,
      useClass: AppAuthInterceptorService,
      multi   : true
    },
    {
      provide : HTTP_INTERCEPTORS,
      useClass: AppProgressInterceptorService,
      multi   : true
    },
    { provide: DEV_NAME, useValue: 'saban ünlü' },
    { provide: TEAM_NAMES, useValue: 'saban ünlü', multi: true },
    AppServiceToDeleteLater
  ],
  bootstrap   : [ AppComponent ],
  exports     : [ ReversePipe ]
} )
export class AppModule {
}
