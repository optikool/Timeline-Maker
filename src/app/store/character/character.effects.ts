import { Injectable } from '@angular/core';
import { Actions, createEffect, Effect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap, switchMap } from 'rxjs/operators';
import { HelperService } from 'src/app/services/helper.service';
import { Character } from './character.model';

@Injectable()
export class CharacterEffect {
    constructor(
        private actions$: Actions,
        private helperService: HelperService
    ) {}

    loadCharacters$ = createEffect(() => this.actions$.pipe(
        ofType('[Character] Get Characters'),
        mergeMap(() => this.helperService.getCharacters()
            .pipe(
                map(characters => ({ type: '[Character] Get Characters Loaded', payload: characters })),
                catchError(() => of({ type: '' }))
            )
        )
    ));

    loadCharacter$ = createEffect(() => this.actions$.pipe(
        ofType('[Character] Get Character'),
        mergeMap((value) => this.helperService.getCharacter(value)
            .pipe(
                map(character => ({ type: '[Character] Get Character Loaded', payload: character })),
                catchError(() => of({ type: '' }))
            )
        )
    ));
}