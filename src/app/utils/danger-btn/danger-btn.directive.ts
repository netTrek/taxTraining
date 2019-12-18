import { Directive, EventEmitter, HostBinding, HostListener, Input, Output } from '@angular/core';
import { aliasTransformFactory } from '@angular/compiler-cli/src/ngtsc/transform/src/alias';

@Directive ( {
  selector: 'button[taxDangerBtn]'
} )
export class DangerBtnDirective {

  @HostBinding ( 'style.backgroundColor' )
  backgroundColor = 'red';

  @HostBinding ( 'style.fontWeight' )
  fontWeight = 'bold';

  @Output()
  confirmed: EventEmitter<undefined> = new EventEmitter();

  @Input()
  taxDangerBtn: string;

  @Input()
  taxDangerBtnCounter: number;

  constructor() {
  }

  @HostListener ( 'click' )
  directiveWasClicked() {
    const msg = this.taxDangerBtn || 'do you really wand to do that?';
    // console.log ( this.taxDangerBtnCounter );
    if ( confirm( msg ) ) {
      this.confirmed.emit();
    }
  }

}
