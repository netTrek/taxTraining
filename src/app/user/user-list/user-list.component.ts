import { Component, OnInit } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'tax-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  userList: User[] = [
    {firstname: 'saban', lastname: 'ü'}/*,
    {firstname: 'peter', lastname: 'm'}*/
  ];
  selectedUser: User;

  get selectedInd(): number {
    return this.userList.indexOf ( this.selectedUser );
  }

  constructor() {
  }

  ngOnInit() {
    // for ( const user of this.userList ) {
    //   console.log ( user );
    // }
    this.selectedUser = this.userList[0];
  }

  selectUsr( user: User ) {
    if ( this.selectedUser === user) {
      this.selectedUser = undefined;
    } else {
      this.selectedUser = user;
    }
  }

  add( firstname: string, lastname: string ) {
    this.selectedUser = { firstname, lastname };
    this.userList.push( this.selectedUser );
  }

  update( firstname: string, lastname: string ) {
    this.userList [this.selectedInd] =
    this.selectedUser = { firstname, lastname };
  }

  delete() {
    this.userList.splice( this.selectedInd, 1 );
    this.selectedUser = undefined;
  }
}
