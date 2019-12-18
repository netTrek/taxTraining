import { IObserver } from './iobserver';

export class Receiver implements IObserver{
  receive( value: any ) {
    console.log ( value );
  }
}
