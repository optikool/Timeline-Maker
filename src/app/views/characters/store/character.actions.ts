import { createAction, props } from '@ngrx/store';
import { Character, CharacterGenderList, Parent } from 'src/app/models/character.model';

export enum CharacterActionTypes {
  LOAD_CHARACTERS = '[Character List Component] Load Characters',
  LOAD_CHARACTERS_SUCCESS = '[Character Effect] Load Characters Success',
  LOAD_CHARACTERS_FAILURE = '[Character Effect] Load Characters Failure',
  LOAD_CHARACTER = '[Character List Component] Load Character',
  LOAD_CHARACTER_SUCCESS = '[Character Effect] Load Character Success',
  LOAD_CHARACTER_FAILURE = '[Character Effect] Load Character Failure',
  LOAD_PARENT = '[Parent] Load Parent',
  LOAD_PARENT_SUCCESS = '[Parent] Load Parent Success',
  LOAD_PARENT_FAILURE = '[Parent] Load Parent Failure',
  LOAD_CHILDREN = '[Children] Load Character Children',
  LOAD_CHILDREN_SUCCESS = '[Children] Load Character Children Success',
  LOAD_CHILDREN_FAILURE = '[Children] Load Character Children Failure',
  LOAD_MOTHER_LIST = '[Mother List] Load Mother List',
  LOAD_MOTHER_LIST_SUCCESS = '[Mother List] Load Mother List Success',
  LOAD_MOTHER_LIST_FAILURE = '[Mother List] Load Mother List Failure',
  LOAD_FATHER_LIST = '[Father List] Load Father List',
  LOAD_FATHER_LIST_SUCCESS = '[Father List] Load Father List Success',
  LOAD_FATHER_LIST_FAILURE = '[Father List] Load Father List Failure',
  LOAD_CHARACTER_TREE = '[Load Character Tree] Load Character Tree',
  LOAD_CHARACTER_TREE_SUCCESS = '[Load Character Tree] Load Character Tree Success',
  LOAD_CHARACTER_TREE_FAILURE = '[Load Character Tree] Load Character Tree Failure',
  CREATE_CHARACTER = '[Character Create] Create Character',
  CREATE_CHARACTER_SUCCESS = '[Character Create Success] Create Character Success',
  CREATE_CHARACTER_FAILURE = '[Character Create Failure] Create Character Failure',
  UPDATE_CHARACTER = '[Character Update] Update Character',
  UPDATE_CHARACTER_SUCCESS = '[Character Update Success] Update Character Success',
  UPDATE_CHARACTER_FAILURE = '[Character Update Failure] Update Character Failure',
  DELETE_CHARACTER = '[Character Delete] Delete Character',
  DELETE_CHARACTER_SUCCESS = '[Character Delete Success] Delete Character Success',
  DELETE_CHARACTER_FAILURE = '[Character Delete Failure] Delete Character Failure',
  GET_SIBLINGS_PARENT_NAME = '[Sibling] Get Parent Name'
}

export const loadCharacters = createAction(
  CharacterActionTypes.LOAD_CHARACTERS
);

export const loadCharactersSuccess = createAction(
  CharacterActionTypes.LOAD_CHARACTERS_SUCCESS,
  props<{ characters: Character[] }>()
);

export const loadCharactersFailure = createAction(
  CharacterActionTypes.LOAD_CHARACTERS_FAILURE,
  props<{ error: any }>()
);

export const loadCharacter = createAction(
  CharacterActionTypes.LOAD_CHARACTER,
  props<{ id: number }>()
);

export const loadCharacterSuccess = createAction(
  CharacterActionTypes.LOAD_CHARACTER_SUCCESS,
  props<{ character: Character }>()
);

export const loadCharacterFailure = createAction(
  CharacterActionTypes.LOAD_CHARACTER_FAILURE,
  props<{ error: any }>()
);

export const loadParent = createAction(
  CharacterActionTypes.LOAD_PARENT,
  props<{ id: number }>()
);

export const loadParentSuccess = createAction(
  CharacterActionTypes.LOAD_PARENT_SUCCESS,
  props<{ parent: Parent }>()
);

export const loadParentFailure = createAction(
  CharacterActionTypes.LOAD_PARENT_FAILURE,
  props<{ error: any }>()
);

export const loadChildren = createAction(
  CharacterActionTypes.LOAD_CHILDREN,
  props<{ id: number }>()
);

export const loadChildrenSuccess = createAction(
  CharacterActionTypes.LOAD_CHILDREN_SUCCESS,
  props<{ children: Character[] }>()
);

export const loadChildrenFailure = createAction(
  CharacterActionTypes.LOAD_CHILDREN_FAILURE,
  props<{ error: any }>()
);

export const loadMotherList = createAction(
  CharacterActionTypes.LOAD_MOTHER_LIST
);

export const loadMotherListSuccess = createAction(
  CharacterActionTypes.LOAD_MOTHER_LIST_SUCCESS,
  props<{ characters: CharacterGenderList[] }>()
);

export const loadMotherListFailure = createAction(
  CharacterActionTypes.LOAD_MOTHER_LIST_FAILURE,
  props<{ error: any }>()
);

export const loadFatherList = createAction(
  CharacterActionTypes.LOAD_FATHER_LIST
);

export const loadFatherListSuccess = createAction(
  CharacterActionTypes.LOAD_FATHER_LIST_SUCCESS,
  props<{ characters: CharacterGenderList[] }>()
);

export const loadFatherListFailure = createAction(
  CharacterActionTypes.LOAD_FATHER_LIST_FAILURE,
  props<{ error: any }>()
);

export const createCharacter = createAction(
  CharacterActionTypes.CREATE_CHARACTER,
  props<{ character: Character }>()
);

export const createCharacterSuccess = createAction(
  CharacterActionTypes.CREATE_CHARACTER_SUCCESS,
  props<{ characters: Character[] }>()
);

export const createCharacterFailure = createAction(
  CharacterActionTypes.CREATE_CHARACTER_FAILURE,
  props<{ error: any }>()
);

export const updateCharacter = createAction(
  CharacterActionTypes.UPDATE_CHARACTER,
  props<{ character: Character }>()
);

export const updateCharacterSuccess = createAction(
  CharacterActionTypes.UPDATE_CHARACTER_SUCCESS,
  props<{ characters: Character[] }>()
);

export const updateCharacterFailure = createAction(
  CharacterActionTypes.UPDATE_CHARACTER_FAILURE,
  props<{ error: any }>()
);

export const deleteCharacter = createAction(
  CharacterActionTypes.DELETE_CHARACTER,
  props<{ id: number }>()
);

export const deleteCharacterSuccess = createAction(
  CharacterActionTypes.DELETE_CHARACTER_SUCCESS,
  props<{ characters: Character[] }>()
);

export const deleteCharacterFailure = createAction(
  CharacterActionTypes.DELETE_CHARACTER_FAILURE,
  props<{ error: any }>()
);

export const loadCharacterTree = createAction(
  CharacterActionTypes.LOAD_CHARACTER_TREE,
  props<{ characters: Character[] }>()
);

export const loadCharacterTreeSuccess = createAction(
  CharacterActionTypes.LOAD_CHARACTER_TREE_SUCCESS,
  props<{ characterTree: Character[] }>()
);

export const loadCharacterTreeFailure = createAction(
  CharacterActionTypes.LOAD_CHARACTER_TREE_FAILURE,
  props<{ error: any }>()
);
