import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserListItemComponent } from './user-list/user-list-item/user-list-item.component';
import { UtilsModule } from '../utils/utils.module';
import { TEAM_NAMES } from '../injection-samples/MyCustomInjectionTokens';
import { UserDetailsComponent } from './user-details/user-details.component';
import { RouterModule } from '@angular/router';



@NgModule( {
  declarations: [ UserComponent, UserListComponent, UserListItemComponent, UserDetailsComponent ],
  imports: [
    CommonModule,
    UtilsModule,
    RouterModule
  ],
  exports     : [
    UserComponent,
    UserListComponent
  ], providers: [
    {provide: TEAM_NAMES, useValue: 'shaip z', multi: true }
  ]
})
export class UserModule { }
