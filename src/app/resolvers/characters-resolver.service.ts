import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map, first } from 'rxjs/operators';
import { Character } from '../interfaces/character';
import { HelperService } from '../services/helper.service';


@Injectable({
  providedIn: 'root'
})
export class CharactersResolverService implements Resolve<Array<Character>> {
  constructor(
    private store: Store<{ characters: Character[] }>
  ) { }

  resolve(): Observable<Character[]> {
    return this.store.select('characters').pipe(
      map((data) => {
        return data; 
      }),
      first()
    );
  }
}
