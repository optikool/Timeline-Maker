import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { Character } from '../interfaces/character';
import { HelperService } from '../services/helper.service';

@Injectable({
  providedIn: 'root'
})
export class CharactersResolverService implements Resolve<Array<Character>> {

  constructor(
    private helperService: HelperService  
  ) { }

  resolve(): Observable<Character[]> {
    return this.helperService.getCharacters();
  }
}
