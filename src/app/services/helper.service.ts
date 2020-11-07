import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { ElectronService } from 'ngx-electron';
import { of, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Character } from '../interfaces/character';

@Injectable({
  providedIn: 'root'
})
export class HelperService {
  private _characters$: Observable<Character[]>;
  private _storedCharacters: Array<Character>;
  private _storedCharacter: Character;

  constructor( 
    private router: Router,
    private _electronService: ElectronService,
    private _store: Store<{ characters: { Character: Character, Characters: Character[] } }>) {
      this._store.select('characters')
        .subscribe(data => {
          this._storedCharacters = data.Characters;
          this._storedCharacter = data.Character;
        });
    }

  navigateToPage(page) {
    this.router.navigate(page);
  }

  getCharacter(id: number): Observable<Character> {
    return of(this._electronService.ipcRenderer.sendSync('get-character', id)).pipe(
        catchError((error: any) => Observable.throw(error.json))
      );
  }

  getCharacters(): Observable<Character[]> {
    return of(this._electronService.ipcRenderer.sendSync('get-characters')).pipe(
      catchError((error: any) => Observable.throw(error.json))
    );
  }

  saveCharacter(character: Character): Observable<Character[]> {
    return of(this._electronService.ipcRenderer.sendSync('save-character', character)).pipe(
      catchError((error: any) => Observable.throw(error.json))
    );
  }

  updateCharacter(character: Character): Observable<Character[]> {
    return of(this._electronService.ipcRenderer.sendSync('update-character', character)).pipe(
      catchError((error: any) => Observable.throw(error.json))
    );
  }

  deleteCharacter(id: number): Observable<Character[]> {
    return of(this._electronService.ipcRenderer.sendSync('delete-character', id)).pipe(
      catchError((error: any) => Observable.throw(error.json))
    );
  }
}
