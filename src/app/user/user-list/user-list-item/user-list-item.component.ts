import { Component, EventEmitter, HostBinding, HostListener, Input, OnInit, Output } from '@angular/core';
import { User } from '../../user';

@Component({
  selector: 'tax-user-list-item',
  templateUrl: './user-list-item.component.html',
  styleUrls: ['./user-list-item.component.scss']
})
export class UserListItemComponent implements OnInit {

  @Input() user: User;
  @Output() selectUsr: EventEmitter<User>
  = new EventEmitter();

  @Input()
  @HostBinding('class.selected')
  isSelected = false;
  constructor() { }

  ngOnInit() {
  }
  @HostListener('click')
  triggerCustomEvent() {
    this.selectUsr.emit( this.user );
  }
}
