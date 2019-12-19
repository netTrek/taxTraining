import { Injectable } from '@angular/core';
import { User } from './user';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  /*
  userList: User[] = [
    {firstname: 'saban', lastname: 'ü'}
  ];
  */
  userList$: BehaviorSubject<User[]> = new BehaviorSubject([
    {firstname: 'saban', lastname: 'ü'}
  ]);

  constructor() { }
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
}
