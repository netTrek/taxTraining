import { Injectable } from '@angular/core';
import { User } from './user';
import { BehaviorSubject, Observable, timer } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { map, mapTo, tap } from 'rxjs/operators';
import { ErrorHandlingService } from '../error-handling/error-handling.service';

@Injectable ( {
  providedIn: 'root'
} )
export class UserService {
  /*
  userList: User[] = [
    {firstname: 'saban', lastname: 'ü'}
  ];
  */
  userList$: BehaviorSubject<User[]> = new BehaviorSubject ( [] );

  constructor( private $http: HttpClient, private $error: ErrorHandlingService ) {
    this.updateUserList ();
  }

  getUsrById( id: number ): Observable<User> {
    return this.$http.get<User> ( environment.api + id ).pipe(
      tap ( () => {}, err => this.$error
        .sendError('could not load user for id ' + id ) )
    );
  }

  add( user: User ): Promise<User> {
    // this.userList$.value.push( user );
    // this.userList$.next( this.userList$.value );
    return this.$http.post<User> ( environment.api, user )
               .pipe (
                 tap (
                   next => this.updateUserList (),
                   error => this.$error.sendError ( 'somethings goes wrong adding a user'
                   )
                 )
               )
               .toPromise ();
    /*
        .subscribe(
          newuser => console.log ( newuser ),
          error => this.$error.sendError( 'somethings goes wrong adding a user' )
        );
    return user;
    */
  }

  update( user: User ): Promise<User> {
    return this.$http.put<User> ( environment.api + user.id, user )
               .pipe (
                 tap (
                   next => this.updateUserList (),
                   error => this.$error.sendError ( 'somethings goes wrong updating a user'
                   )
                 )
               )
               .toPromise ();
  }

  /*

    update( user: User, firstname: string, lastname: string ): User | null {
      const ind = this.userList$.value.indexOf ( user );
      if ( ind !== - 1 ) {
        user                         = { ...user, firstname, lastname };
        this.userList$.value [ ind ] = user;
        this.userList$.next ( this.userList$.value );
        return user;
      }
      return null;
    }
  */

  delete( user: User ): Promise<undefined> {
    return this.$http.delete<undefined> ( environment.api + user.id )
               .pipe (
                 tap (
                   next => this.updateUserList (),
                   error => this.$error.sendError ( 'somethings goes wrong deleting ' + user.firstname
                   )
                 )
               )
               .toPromise ();
  }

  /*

    delete( user: User ): boolean {
      const ind = this.userList$.value.indexOf ( user );
      if ( ind !== - 1 ) {
        this.userList$.value.splice ( ind, 1 );
        this.userList$.next ( this.userList$.value );
        return true;
      }
      return false;
    }
  */

  private updateUserList() {
    this.$http.get<User[]> ( environment.api )
        .subscribe (
          users => this.userList$.next ( users ),
          err => this.$error.sendError( 'could not load userlist' )
        )
    ;
    // this.$http.get<User[]>( environment.api )
    //     .pipe(
    //       map( users => users.map( user => (
    //         { fullname: user.firstname + user.lastname, id: user.id }
    //       ) ))
    //     )
    //     .subscribe(
    //       users => console.log ( users )
    //     )
    // ;
  }

  isAdmin(): Observable<boolean> {
    return timer(1000).pipe( mapTo (true) );
  }
}
