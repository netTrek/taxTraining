import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map, switchMap, tap } from 'rxjs/operators';
import { UserService } from '../user.service';
import { User } from '../user';

@Component({
  selector: 'tax-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {
  id = -1;
  user: User;

  constructor( private route: ActivatedRoute, private $user: UserService,
               private router: Router ) { }

  ngOnInit() {
    this.route.data.pipe(
      map ( data => data.user )
    ).subscribe(
      user => {
            this.user = user;
            this.id = user.id;
          }
    );
    // this.route.data.pipe(
    //   map ( data => data.myKey )
    // ).subscribe(
    //   myValue => console.log ( myValue )
    // );
    // this.route.paramMap.pipe(
    //   map( value => +value.get( 'id' )),
    //   switchMap( id => this.$user.getUsrById( id ) )
    // ).subscribe(
    //   user => {
    //     this.user = user;
    //     this.id = user.id;
    //   },
    //   err => {
    //     this.router.navigate( [ '/user', 1 ] );
    //   });

    // console.log ( 'detail initi' );
    // this.route.paramMap.pipe(
    //   map( value => +value.get( 'id' ))
    // ).subscribe(
    //   id => {
    //     this.id = id;
    //     this.$user.getUsrById( id ).subscribe( user => this.user = user );
    //   }
    // );
  }

}
