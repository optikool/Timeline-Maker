export interface Character {
    id: number;
    characterName: string;
    dateOfBirth: string;
    dateOfDeath: string;
    fatherName: number | null;
    motherName: number | null;
    sonName: number;
    fatherAgeAtBirth: number;
    fatherContinuedToLive: number;
    reference: string;
    description: string;
}
