import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";

@Injectable({providedIn: 'root'})

export class ScreenResService {

  private lowResLimit: number = 650;
  private low$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false)
  _low$: Observable<boolean> = this.low$.asObservable();

  get low() {
    return this._low$;
  }

  setLowRes(res: number) {
    this.low$.next(res < this.lowResLimit);
  }
}
