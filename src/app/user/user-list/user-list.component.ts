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

  async add( firstname: string, lastname: string ) {
    this.selectedUser = await this.$user.add( {firstname, lastname });
  }
/*

  add( firstname: string, lastname: string ) {
    this.$user.add( {firstname, lastname }).then(
      user => this.selectedUser = user
    );
    // this.selectedUser = this.$user.add( {firstname, lastname });
  }
*/

  async update( firstname: string, lastname: string ) {
    this.selectedUser = await this.$user.update( {...this.selectedUser, firstname, lastname } );
  }
/*

  update( firstname: string, lastname: string ) {
    this.selectedUser = this.$user.update( this.selectedUser, firstname, lastname  );
  }
*/

  async delete() {
    await this.$user.delete( this.selectedUser );
    this.selectedUser = undefined;
  }
/*

  delete() {
    if ( this.$user.delete( this.selectedUser ) ) {
      this.selectedUser = undefined;
    }
  }
*/
}
