import { IObservable } from './iobservable';
import { IObserver } from './iobserver';

export class Sender implements IObservable{

  observers: Set<IObserver> = new Set<IObserver>();

  has( observer: IObserver ): boolean {
    return this.observers.has( observer );
  }

  registerObserver( observer: IObserver ) {
    this.observers.add( observer );
  }

  removeObserver( observer: IObserver ) {
    this.observers.delete( observer );
  }

  send( value: any ) {
    this.observers.forEach( obs => obs.receive( value ) );
  }
}
