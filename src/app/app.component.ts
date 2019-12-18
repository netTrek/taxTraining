import { Component } from '@angular/core';
import { AppServiceToDeleteLater } from './app.service.to-delete-later';
import { UserService } from './user/user.service';
import { interval } from 'rxjs';
import { take } from 'rxjs/operators';

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

  constructor( public $myService: AppServiceToDeleteLater, $user: UserService ) {
    console.log ( $myService );
    interval ( 100 )
      .pipe ( take ( 5 ) )
      .subscribe ( value => {
        $user.add ( { firstname: 'saban' + value, lastname: 'ünlü' + value } );
      } );
  }
}
