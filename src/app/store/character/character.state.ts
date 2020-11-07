import { Character } from './character.model';

export default class CharacterState {
    Character: Character;
    Characters: Array<Character>;
}

export const initialState = (): CharacterState => {
    return {
        Character: {
            id: null,
            characterName: '',
            gender: '',
            dateOfBirth: '',
            dateOfDeath:'',
            fatherId: null,
            motherId: null,
            fatherAgeAtBirth: null,
            fatherContinuedToLive: null,
            reference: '',
            description: ''
        },
        Characters: Array<Character>()
    }
}
