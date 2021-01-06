import { Injectable } from '@angular/core';
import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { CharacterEditComponent } from '../views/characters/character-edit/character-edit.component';
import { CharacterNewComponent } from '../views/characters/character-new/character-new.component';
import { CharacterState } from '../views/characters/store';
import * as fromActions from '../views/characters/store/character.actions';

@Injectable({
  providedIn: 'root'
})
export class CharacterResolver implements Resolve<string> {
  constructor(
    private readonly store: Store<CharacterState>
  ) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<string> {
    const id: number =  parseInt(route.paramMap.get('id'));
    this.store.dispatch(fromActions.loadCharacters());
    this.store.dispatch(fromActions.loadCharacter({id: id}));
    return of('NONE');
  }
}
