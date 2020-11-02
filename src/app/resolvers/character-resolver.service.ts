import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Character } from '../interfaces/character';
import { HelperService } from '../services/helper.service';

@Injectable({
  providedIn: 'root'
})
export class CharacterResolverService implements Resolve<Character> {

  constructor(
    private helperService: HelperService 
  ) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Character> {
    const id: number =  parseInt(route.paramMap.get('id'));
    return this.helperService.getCharacter(id);
  }
}
