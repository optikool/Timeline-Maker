import {
  createReducer,
  MetaReducer,
  on
} from '@ngrx/store';
import { Character, CharacterGenderList, Family } from 'src/app/models/character.model';
import { environment } from '../../../../environments/environment';
import * as fromCharacterActions from './character.actions';

export const characterStateFeatureKey = 'characterState';

export interface CharacterState {
  characters: Character[];
  character: Family;
  mothers: CharacterGenderList[];
  fathers: CharacterGenderList[];
  characterTree: Character[];
  error?: any;
}

export const initialState: CharacterState = {
  characters: [],
  character: {
    id: 0,
    characterName: '',
    gender: '',
    dateOfBirth: '',
    dateOfDeath:'',
    fatherId: 0,
    motherId: 0,
    father: {
        id: 0,
        name: '',
        gender: 'M'
    },
    mother: {
        id: 0,
        name: '',
        gender: 'F'
    },
    children: [],
    fatherAgeAtBirth: null,
    fatherContinuedToLive: null,
    reference: '',
    description: ''
  },
  mothers: [],
  fathers: [],
  characterTree: [],
  error: undefined
};


export const reducers = createReducer(
  initialState,
  on(fromCharacterActions.loadCharacterSuccess, (state: CharacterState, action) => {
    return {
      ...state,
      character: action.character
    }
  }),
  on(fromCharacterActions.loadCharactersSuccess, (state: CharacterState, action) => {
    return {
      ...state,
      characters: action.characters
    }
  }),
  on(fromCharacterActions.loadCharactersFailure, (state, action) => {
    return {
      ...state,
      error: action.error
    }
  }),
  on(fromCharacterActions.loadParentSuccess, (state: CharacterState, action) => {
    return {
      ...state,
      character: {
        ...state.character,
        father: action.parent,
        mother: action.parent
      }
    }

  }),
  on(fromCharacterActions.loadParentFailure, (state: CharacterState, action) => {
    return {
      ...state,
      error: action.error
    }
  }),
  on(fromCharacterActions.loadMotherListSuccess, (state: CharacterState, action) => {
    return {
      ...state,
      mothers: action.characters
    }
  }),
  on(fromCharacterActions.loadMotherListFailure, (state: CharacterState, action) => {
    return {
      ...state,
      error: action.error
    }
  }),
  on(fromCharacterActions.loadFatherListSuccess, (state: CharacterState, action) => {
    return {
      ...state,
      fathers: action.characters
    }
  }),
  on(fromCharacterActions.loadFatherListFailure, (state: CharacterState, action) => {
    return {
      ...state,
      error: action.error
    }
  }),
  on(fromCharacterActions.createCharacterSuccess, (state: CharacterState, action) => {
    return {
      ...state,
      characters: action.characters
    }
  }),
  on(fromCharacterActions.createCharacterFailure, (state: CharacterState, action) => {
    return {
      ...state,
      error: action.error
    }
  }),
  on(fromCharacterActions.updateCharacterSuccess, (state: CharacterState, action) => {
    return {
      ...state,
      characters: action.characters
    }
  }),
  on(fromCharacterActions.updateCharacterFailure, (state: CharacterState, action) => {
    return {
      ...state,
      error: action.error
    }
  }),
  on(fromCharacterActions.deleteCharacterSuccess, (state: CharacterState, action) => {
    return {
      ...state,
      characters: action.characters
    }
  }),
  on(fromCharacterActions.deleteCharacterFailure, (state: CharacterState, action) => {
    return {
      ...state,
      error: action.error
    }
  }),
  on(fromCharacterActions.loadCharacterTreeSuccess, (state: CharacterState, action) => {
    return {
      ...state,
      characterTree: action.characterTree
    }
  }),
  on(fromCharacterActions.loadCharacterTreeFailure, (state: CharacterState, action) => {
    return {
      ...state,
      error: action.error
    }
  })
);

export const metaReducers: MetaReducer<CharacterState>[] = !environment.production ? [] : [];
