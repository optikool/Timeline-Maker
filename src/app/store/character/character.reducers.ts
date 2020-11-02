import { Action, createReducer, on, State } from '@ngrx/store';
import CharacterState, { initialState } from './character.state';
import * as CharacterActions from './character.actions';

export const initialstate = initialState();

const characterReducer = createReducer(
    initialstate,
    on(CharacterActions.getCharacterLoaded, (state: CharacterState, { payload }) => { 
        return {
            ...state,
            Character: payload
        }
    }),
    on(CharacterActions.getCharactersLoaded, (state: CharacterState, { payload }) => { 
        return {
            ...state,
            Characters: payload
        }
    })
)

export function reducer(state: CharacterState | undefined, action: Action) {
    return characterReducer(state, action);
}
