import {
  Component,
  EventEmitter,
  HostBinding,
  HostListener,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChange,
  SimpleChanges
} from '@angular/core';
import { User } from '../../user';

@Component ( {
  selector   : 'tax-user-list-item',
  templateUrl: './user-list-item.component.html',
  styleUrls  : [ './user-list-item.component.scss' ]
} )
export class UserListItemComponent implements OnInit, OnChanges {

  @Input () user: User;
  @Output () selectUsr: EventEmitter<User>
               = new EventEmitter ();

  private ɵisSelected = false;

  @Input ()
  @HostBinding ( 'class.selected' )
  get isSelected(): boolean {
    return this.ɵisSelected;
  }

  set isSelected( value: boolean ) {
    this.ɵisSelected = value;
  }

  constructor() {
  }

  ngOnInit() {
  }

  @HostListener ( 'click' )
  triggerCustomEvent() {
    this.selectUsr.emit ( this.user );
  }

  ngOnChanges( changes: SimpleChanges ): void {
    // if ( changes.hasOwnProperty('isSelected') ) {
    //   const isSelectedVal: SimpleChange = changes.isSelected;
    //   if ( !isSelectedVal.firstChange && isSelectedVal.currentValue ) {
    //     console.log ( this.user, 'is selected now' );
    //   }
    // }
  }
}
