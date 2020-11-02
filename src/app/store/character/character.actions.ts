import { createAction, props } from '@ngrx/store';
import { Character } from './character.model';

export const getCharacter = createAction(
    '[Character] Get Character',
    props<{ payload: number }>()
 );

 export const getCharacterLoaded = createAction(
    '[Character] Get Character Loaded',
    props<{ payload: Character }>()
 );

export const getCharacters = createAction(
    '[Character] Get Characters'
);

export const getCharactersLoaded = createAction(
    '[Character] Get Characters Loaded',
    props<{ payload: Array<Character> }>()
);