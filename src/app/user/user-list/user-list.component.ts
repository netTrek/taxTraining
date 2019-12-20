import { Component, OnInit } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'tax-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  userList: User[] = [
    {firstname: 'saban', lastname: 'ünlü'}
  ];

  constructor() { }

  ngOnInit() {
  }

  add( firstname: string, lastname: string ) {
    this.userList.push( {firstname, lastname} );
  }

  remove( user: User ) {
    const id = this.userList.indexOf(user);
    if ( id !== -1 ) {
      this.userList.splice( id, 1 );
    }
  }

}
