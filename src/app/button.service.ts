import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {filter, map} from 'rxjs/operators';

@Injectable()
export class ButtonService {
  private eventbus$ = new BehaviorSubject<{ type: string, value?: string }>(null);


  broadcast(type: string, value?: string) {
    this.eventbus$.next({type, value});
  }

  listen(type: string): Observable<string | null> {
    return this.eventbus$.pipe(filter(e => !!e && e.type === type), map(e => e.value));
  }

}

