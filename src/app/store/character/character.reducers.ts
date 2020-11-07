import { Action, createReducer, on } from '@ngrx/store';
import CharacterState, { initialState } from './character.state';
import * as CharacterActions from './character.actions';

export const initialstate = initialState();

const reducer = createReducer(
    initialstate,
    on(CharacterActions.getCharacterLoaded, (state: CharacterState, { payload }) => { 
        console.log('getCharacterLoaded state: ', state);
        console.log('getCharacterLoadedpayload: ', payload);
        return {
            ...state,
            Character: payload
        }
    }),
    on(CharacterActions.getCharactersLoaded, (state: CharacterState, { payload }) => { 
        console.log('getCharactersLoaded state: ', state);
        console.log('getCharactersLoadedpayload: ', payload);
        return {
            ...state,
            Characters: payload
        }
    })
)

export function characterReducers(state: CharacterState | undefined, action: Action) {
    return reducer(state, action);
}
