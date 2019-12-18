import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverse'
})
export class ReversePipe implements PipeTransform {

  transform(value: string|any[], prefix?: string|any[]): string|any[] {
    if ( Array.isArray( value ) ) {
      const reversedList = [...value].reverse();
      const prefixList = prefix || [];
      const result = [ ...prefixList, ...reversedList ];
      return result;
    } else {
      return (prefix || '') + value.split('').reverse().join('');
    }
    return value;
  }
/*
  without prefix
  transform(value: string|any[]): string|any[] {
    if ( Array.isArray( value ) ) {
      return value.reverse();
    } else {
      return value.split('').reverse().join('');
    }
    return value;
  }
*/

}
