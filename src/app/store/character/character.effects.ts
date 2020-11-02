import { Injectable } from '@angular/core';
import { Actions, createEffect, Effect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, mergeMap, switchMap } from 'rxjs/operators';
import { HelperService } from 'src/app/services/helper.service';
import { Character } from './character.model';

@Injectable()
export class CharacterEffect {
    constructor(
        private actions$: Actions,
        private helperService: HelperService
    ) {}

    @Effect()
    loadCharacters =  this.actions$
        .pipe(
            ofType('[Character] Get Characters'),
            switchMap(() => this.helperService.getCharacters()),
            mergeMap((data) => {
                console.log('[Character] Get Characters: ', data);
                return [{
                    type: '[Character] Get Character Loaded',
                    payload: data
                }]
            })
            
        );

    @Effect()
    loadCharacter = this.actions$
        .pipe(
            ofType('[Character] Get Character'),
            switchMap((value: {payload: number, type: string}, index: number) => {
                return this.helperService.getCharacter(value.payload);
            }),
            mergeMap((data: Character) => {
                console.log('[Character] Get Character: ', data);
                return [{
                    type: '[Character] Get Characters Loaded',
                    payload: data
                }];
            })
        );
}