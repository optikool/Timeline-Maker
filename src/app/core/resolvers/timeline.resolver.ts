import { Injectable } from '@angular/core';
import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { Store } from '@ngrx/store';
import { CharacterState } from '../../views/characters/store';
import * as fromActions from '../../views/characters/store/character.actions';

@Injectable({
  providedIn: 'root'
})
export class TimelineResolver implements Resolve<string> {
  constructor(
    private readonly store: Store<CharacterState>
  ) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<string> {
    this.store.dispatch(fromActions.loadCharacters());
    return of('NONE');
  }
}
