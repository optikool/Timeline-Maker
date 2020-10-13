import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Member } from '../interfaces/member';

const MEMBERS: Array<Member> = [
  {
    id: 1,
    name: 'Adam',
    dob: '50 BCE',
    dod: '3096 BCE',
    father: null,
    mother: null,
    son: 3,
    father_age_at_birth: 130,
    continue_to_live_till: 800,
    yr_of_death_refer: 'Gen 5:3-5'
  },
  {
    id: 2,
    name: 'Eve',
    dob: '100 BCE',
    dod: '3096 BCE',
    father: null,
    mother: null,
    son: 3,
    father_age_at_birth: 130,
    continue_to_live_till: 800,
    yr_of_death_refer: 'Gen 5:3-5'
  },
  {
    id: 3,
    name: 'Seth',
    dob: '2896 BCE',
    dod: '2984 BCE',
    father: 1,
    mother: 2,
    son: 4,
    father_age_at_birth: 105,
    continue_to_live_till: 807,
    yr_of_death_refer: 'Gen 5:6-8'
  },
  {
    id: 4,
    name: 'E\'nosh',
    dob: '3791 BCE',
    dod: '2976 BCE',
    father: 1,
    mother: 2,
    son: null,
    father_age_at_birth: 90,
    continue_to_live_till: 815,
    yr_of_death_refer: 'Gen 5:12-14'
  }
];

@Injectable({
  providedIn: 'root'
})
export class MembersResolverService implements Resolve<Array<Member>> {

  constructor() { }

  resolve() {
    return MEMBERS;
  }
}
