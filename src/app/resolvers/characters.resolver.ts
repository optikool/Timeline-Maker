import { Injectable } from '@angular/core';
import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { Store } from '@ngrx/store';
import { CharacterState } from '../views/characters/store';
import * as fromActions from '../views/characters/store/character.actions';
import { CharacterListComponent } from '../views/characters/character-list/character-list.component';

@Injectable({
  providedIn: 'root'
})
export class CharactersResolver implements Resolve<boolean> {
  constructor(
    private readonly store: Store<CharacterState>
  ) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    this.store.dispatch(fromActions.loadCharacters());
    return of(true);
  }
}
