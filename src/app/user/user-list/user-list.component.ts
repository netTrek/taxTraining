import { Component, OnInit } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'tax-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  userList: User[] = [
    {firstname: 'saban', lastname: 'ü'},
    {firstname: 'peter', lastname: 'm'}
  ];
  selectedUser: User;
  constructor() { }

  ngOnInit() {
    for ( const user of this.userList ) {
      console.log ( user );
    }
  }

  selectUsr( user: User ) {
    this.selectedUser = user;
  }
}
