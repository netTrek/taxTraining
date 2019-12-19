import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { ProgressHandlerService } from './progress-handler/progress-handler.service';

@Injectable ( {
  providedIn: 'root'
} )
export class AppProgressInterceptorService implements HttpInterceptor {

  constructor( private progress$: ProgressHandlerService ) {
  }

  intercept( req: HttpRequest<any>, next: HttpHandler ): Observable<HttpEvent<any>> {
    this.progress$.increment ();
    return next.handle ( req )
               .pipe ( tap (
                 success => this.progress$.decrement (),
                 error => this.progress$.decrement ()
               ) )
      ;
  }
}
