import { createAction, props } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Character } from './character.model';

export enum GalleryActionsTypes {
    GET_COLLECTIONS_ALL = '[Gallery] Get Collections All',
    SET_COLLECTION_ALL = '[Gallery] Set Collections All',
    GET_COLLECTIONS_LATEST = '[Gallery] Get Collections',
    SET_COLLECTIONS_LATEST_LIMIT = '[Gallery] Set Collections Latest Limit',
    GET_COLLECTIONS_RANDOM = '[Gallery] Get Collections Random',
    SET_COLLECTIONS_RANDOM = '[Gallery] Set Collections Random',
    GET_COLLECTIONS_ERROR = '[Gallery] Get Collections Error'
}

export enum CharacterActionTypes {
    GET_CHARACTER = '[Character] Get Character',
    GET_CHARACTER_LOADED = '[Character] Get Character Loaded',
    GET_CHARACTERS = '[Character] Get Characters',
    GET_CHARACTERS_LOADED = '[Character] Get Characters Loaded',
    GET_SIBLINGS = '[Sibling] Get Characters Siblings',
    GET_SIBLINGS_PARENT_NAME = '[Sibling] Get Parent Name'
}

export const getCharacter = createAction(
    CharacterActionTypes.GET_CHARACTER,
    props<{ payload: number }>()
 );

 export const getCharacterLoaded = createAction(
    CharacterActionTypes.GET_CHARACTER_LOADED,
    props<{ payload: Character }>()
 );

export const getCharacters = createAction(
    CharacterActionTypes.GET_CHARACTERS
);

export const getCharactersLoaded = createAction(
    CharacterActionTypes.GET_CHARACTERS_LOADED,
    props<{ payload: Array<Character> }>()
);