import { Injectable } from '@angular/core';
import { User } from './user';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  /*
  userList: User[] = [
    {firstname: 'saban', lastname: 'ü'}
  ];
  */
  userList$: BehaviorSubject<User[]> = new BehaviorSubject([]);

  constructor( private $http: HttpClient ) {
    this.updateUserList();
  }
  add( user: User ): User {
    this.userList$.value.push( user );
    this.userList$.next( this.userList$.value );
    return user;
  }

  update( user: User, firstname: string, lastname: string ): User|null {
    const ind = this.userList$.value.indexOf( user );
    if ( ind !== -1 ) {
      user = {...user, firstname, lastname};
      this.userList$.value [ind] = user;
      this.userList$.next( this.userList$.value );
      return user;
    }
    return null;
  }

  delete( user: User ): boolean  {
    const ind = this.userList$.value.indexOf( user );
    if ( ind !== -1 ) {
      this.userList$.value.splice( ind, 1 );
      this.userList$.next( this.userList$.value );
      return true;
    }
    return false;
  }

  private updateUserList() {
    this.$http.get<User[]>( environment.api )
        .subscribe(
          users => this.userList$.next( users )
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
}
