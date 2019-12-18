import { IObserver } from './iobserver';

export interface IObservable {
  registerObserver( observer: IObserver );

  has( observer: IObserver ): boolean;

  removeObserver( observer: IObserver );

  send ( value: any );
}
