import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { CharacterActionTypes }  from './character.actions';
import * as fromCharacterActions from './character.actions';
import { CharacterService } from 'src/app/core/services/character.service';
import { of } from 'rxjs';
import { mergeMap, map, catchError, withLatestFrom } from 'rxjs/operators';
import { Character } from 'src/app/core/models/character.model';
import { Store } from '@ngrx/store';
import { CharacterState } from './index';
import { selectCharacters } from './character.selectors';

@Injectable()
export class CharacterEffects {
  constructor(
    private actions$: Actions,
    private store$: Store<CharacterState>,
    private characterService: CharacterService
  ) {}

  loadCharacters$ = createEffect(() => this.actions$.pipe(
    ofType(CharacterActionTypes.LOAD_CHARACTERS),
    mergeMap(() => this.characterService.getCharacters()
      .pipe(
          mergeMap(characters => {
            return [
              fromCharacterActions.loadCharactersSuccess({characters}),
              fromCharacterActions.loadCharacterTree({characters}),
              fromCharacterActions.loadMotherList(),
              fromCharacterActions.loadFatherList()
            ];
          }),
          catchError(error => of(fromCharacterActions.loadCharactersFailure({error})))
      )
    )
  ));

  loadCharacter$ = createEffect(() => this.actions$.pipe(
    ofType(CharacterActionTypes.LOAD_CHARACTER),
    withLatestFrom(this.store$.select(selectCharacters)),
    mergeMap(([action, storeState]) => this.characterService.getCharacter(action, storeState)
      .pipe(
        map(character => fromCharacterActions.loadCharacterSuccess({character})),
        catchError(error => of(fromCharacterActions.loadCharacterFailure({error})))
      )
    )
  ));

  loadMothers$ = createEffect(() => this.actions$.pipe(
    ofType(CharacterActionTypes.LOAD_MOTHER_LIST),
    mergeMap(() => this.characterService.getGenderList('F')
      .pipe(
        map(characters => fromCharacterActions.loadMotherListSuccess({characters})),
        catchError(error => of(fromCharacterActions.loadMotherListFailure({error})))
      ))
  ));

  loadFathers$ = createEffect(() => this.actions$.pipe(
    ofType(CharacterActionTypes.LOAD_FATHER_LIST),
    mergeMap(() => this.characterService.getGenderList('M')
      .pipe(
        map(characters => fromCharacterActions.loadFatherListSuccess({characters})),
        catchError(error => of(fromCharacterActions.loadFatherListFailure({error})))
      ))
  ));

  createCharacter$ = createEffect(() => this.actions$.pipe(
    ofType(CharacterActionTypes.CREATE_CHARACTER),
    mergeMap((character: Character) => this.characterService.createCharacter(character)
      .pipe(
        map(characters => fromCharacterActions.createCharacterSuccess({characters})),
        catchError(error => of(fromCharacterActions.createCharacterFailure({error})))
      ))
  ));

  updateCharacter$ = createEffect(() => this.actions$.pipe(
    ofType(CharacterActionTypes.UPDATE_CHARACTER),
    mergeMap((character: Character) => this.characterService.updateCharacter(character)
      .pipe(
        map(characters => fromCharacterActions.updateCharacterSuccess({characters})),
        catchError(error => of(fromCharacterActions.updateCharacterFailure({error})))
      ))
  ));

  deleteCharacter$ = createEffect(() => this.actions$.pipe(
    ofType(CharacterActionTypes.DELETE_CHARACTER),
    mergeMap((data) => this.characterService.deleteCharacter(data)
      .pipe(
        map(characters => fromCharacterActions.deleteCharacterSuccess({characters})),
        catchError(error => of(fromCharacterActions.deleteCharacterFailure({error})))
      ))
  ));

  loadCharacterTree$ = createEffect(() => this.actions$.pipe(
    ofType(CharacterActionTypes.LOAD_CHARACTER_TREE),
    mergeMap((characters) => this.characterService.generateTree(characters, 0)
      .pipe(
        map(characterTree => fromCharacterActions.loadCharacterTreeSuccess({characterTree})),
        catchError(error => of(fromCharacterActions.loadCharacterTreeFailure({error})))
      ))
  ));
}
