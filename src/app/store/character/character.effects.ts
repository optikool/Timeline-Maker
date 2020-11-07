import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { HelperService } from 'src/app/services/helper.service';
import { CharacterActionTypes }  from './character.actions';
import { Character } from './character.model';

@Injectable()
export class CharacterEffect {
    constructor(
        private actions$: Actions,
        private helperService: HelperService
    ) {}

    loadCharacters$ = createEffect(() => this.actions$.pipe(
        ofType(CharacterActionTypes.GET_CHARACTERS),
        mergeMap(() => this.helperService.getCharacters()
            .pipe(
                map(characters => ({ type: CharacterActionTypes.GET_CHARACTERS_LOADED, payload: characters })),
                catchError(() => of({ type: '' }))
            )
        )
    ));

    loadCharacter$ = createEffect(() => this.actions$.pipe(
        ofType(CharacterActionTypes.GET_CHARACTER),
        mergeMap((value) => this.helperService.getCharacter(value)
            .pipe(
                map(character => ({ type: CharacterActionTypes.GET_CHARACTER_LOADED, payload: character })),
                catchError(() => of({ type: '' }))
            )
        )
    ));
}