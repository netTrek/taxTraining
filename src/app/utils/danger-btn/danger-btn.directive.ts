import { Directive, HostBinding } from '@angular/core';

@Directive({
  selector: 'button[taxDangerBtn]'
})
export class DangerBtnDirective {

  @HostBinding ('style.backgroundColor')
  backgroundColor = 'red';


  @HostBinding ('style.fontWeight')
  fontWeight = 'bold';

  constructor() {
  }

}
