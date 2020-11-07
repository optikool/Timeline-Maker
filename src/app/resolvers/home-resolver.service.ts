import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Store } from '@ngrx/store';
import { Character } from '../interfaces/character';
import { getCharacters } from '../store/character/character.actions';

@Injectable({
  providedIn: 'root'
})
export class HomeResolverService implements Resolve<Array<Character>> {
  
  constructor(private store: Store<{ characters: Character[] }>) {
    this.store.dispatch(getCharacters());
  }

  resolve() {
    // Return empty array till I decide what I want to do here
    return [];
  }
}
