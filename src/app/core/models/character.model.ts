export interface Parent {
    id: number;
    name: string;
    gender: string;
}

export interface Character {
    id: number;
    characterName: string;
    gender: string;
    dateOfBirth: string;
    dateOfDeath: string;
    fatherId: number;
    motherId: number;
    children: Character[];
    fatherAgeAtBirth: number | null;
    fatherContinuedToLive: number | null;
    reference: string;
    description: string;
}

export type CharacterGenderList = Omit<Character, 'gender' | 'children' | 'dateOfBirth' | 'dateOfDeath' | 'fatherId' | 'motherId' | 'fatherAgeAtBirth' | 'fatherContinuedToLive' | 'reference' | 'description'>;

export interface Family extends Character {
    father: Parent;
    mother: Parent;
}