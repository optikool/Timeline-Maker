export class Sibling {
    id: number;
    name: string;
}
export class Character {
    id: number;
    characterName: string;
    gender: string;
    dateOfBirth: string;
    dateOfDeath: string;
    fatherId: number | null;
    motherId: number | null;
    fatherAgeAtBirth: number;
    fatherContinuedToLive: number;
    reference: string;
    description: string;
}

export class CharacterExtended extends Character {
    father: Sibling;
    mother: Sibling;
    children: Array<Sibling>;
}