export interface Member {
    id: number;
    name: string;
    dob: string;
    dod: string;
    father: number | null;
    mother: number | null;
    son: number;
    father_age_at_birth: number;
    continue_to_live_till: number;
    yr_of_death_refer: string;
}
