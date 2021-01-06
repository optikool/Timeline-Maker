import { createFeatureSelector, createSelector } from "@ngrx/store";
import { CharacterState, characterStateFeatureKey } from ".";

export const selectCharacterFeature = createFeatureSelector<CharacterState>(
  characterStateFeatureKey
);

export const selectCharacters = createSelector(
  selectCharacterFeature,
  (state: CharacterState) => state.characters
);

export const selectCharacter = createSelector(
  selectCharacterFeature,
  (state: CharacterState) => state.character
);

export const selectMotherList = createSelector(
  selectCharacterFeature,
  (state: CharacterState) => state.mothers
);

export const selectFatherList = createSelector(
  selectCharacterFeature,
  (state: CharacterState) => state.fathers
);

export const selectCharacterTree = createSelector(
  selectCharacterFeature,
  (state: CharacterState) => state.characterTree
);