import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { AppServiceToDeleteLater } from '../../app.service.to-delete-later';
import { UserService } from '../user.service';

@Component({
  selector: 'tax-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  selectedUser: User;

  constructor( public $myService: AppServiceToDeleteLater,
               public $user: UserService ) {
  }

  ngOnInit() {
  }

  selectUsr( user: User ) {
    if ( this.selectedUser === user) {
      this.selectedUser = undefined;
    } else {
      this.selectedUser = user;
      // this.$myService.val = user.firstname;
    }
  }

  add( firstname: string, lastname: string ) {
    this.selectedUser = this.$user.add( {firstname, lastname });
  }

  update( firstname: string, lastname: string ) {
    this.selectedUser = this.$user.update( this.selectedUser, firstname, lastname  );
  }

  delete() {
    if ( this.$user.delete( this.selectedUser ) ) {
      this.selectedUser = undefined;
    }
  }
}
