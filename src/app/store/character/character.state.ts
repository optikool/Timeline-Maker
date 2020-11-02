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
            dateOfBirth: '',
            dateOfDeath:'',
            fatherName: null,
            motherName: null,
            sonName: null,
            fatherAgeAtBirth: null,
            fatherContinuedToLive: null,
            reference: '',
            description: ''
        },
        Characters: Array<Character>()
    }
}
