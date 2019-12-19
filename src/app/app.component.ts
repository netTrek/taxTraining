import { Component, Inject, LOCALE_ID } from '@angular/core';
import { AppServiceToDeleteLater } from './app.service.to-delete-later';
import { UserService } from './user/user.service';
import { interval } from 'rxjs';
import { distinctUntilChanged, filter, take } from 'rxjs/operators';
import { ErrorHandlingService } from './error-handling/error-handling.service';
import { DEV_NAME, TEAM_NAMES } from './injection-samples/MyCustomInjectionTokens';

/**
 * WIFI: Hotel Albert
 * Albert
 * Akzent19
 * Repo https://github.com/netTrek/taxTraining
 */
@Component ( {
  selector   : 'tax-root',
  templateUrl: './app.component.html',
  styleUrls  : [ './app.component.scss' ]
} )
export class AppComponent {
  title = 'taxTraining';

  constructor(
    public $myService: AppServiceToDeleteLater,
    $user: UserService, $error: ErrorHandlingService,
    // @Inject('saban') name: string,
    @Inject( DEV_NAME ) name: string,
    @Inject( TEAM_NAMES) names: string[],
    @Inject( LOCALE_ID) localeId: string
  ) {
    console.log ( localeId, name, names );
    // console.log ( $myService );
    // $error.subscribe( n => console.log ( n ) );
    // $error.sendError('Ups ..... an erro');
    interval ( 500 )
      .pipe ( take ( 5 ) )
      .subscribe ( value => {
        $user.add ( { firstname: 'saban' + value, lastname: 'ünlü' + value } );
      } );
    $user.userList$
         .pipe(
           filter( value => !!value )
         )
         .subscribe(
            newList => console.log ( 'list changes to', newList )
         );
  }
}
