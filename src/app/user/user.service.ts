import { Injectable } from '@angular/core';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  userList: User[] = [
    {firstname: 'saban', lastname: 'ü'}/*,
    {firstname: 'peter', lastname: 'm'}*/
  ];

  constructor() { }


  add( user: User ): User {
    this.userList.push( user );
    return user;
  }

  update( user: User, firstname: string, lastname: string ): User|null {
    const ind = this.userList.indexOf( user );
    if ( ind !== -1 ) {
      user = {...user, firstname, lastname};
      this.userList [ind] = user;
      return user;
    }
    return null;
  }

  delete( user: User ): boolean  {
    const ind = this.userList.indexOf( user );
    if ( ind !== -1 ) {
      this.userList.splice( ind, 1 );
      return true;
    }
    return false;
  }
}
