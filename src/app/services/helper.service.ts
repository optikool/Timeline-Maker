import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Character } from '../interfaces/character';

@Injectable({
  providedIn: 'root'
})
export class HelperService {

  constructor( private router: Router) { }

  navigateToPage(page) {
    this.router.navigate(page);
  }

  getCharacter(id: number): Character {
    return CHARACTERS.find(character => character.id === id);
  }

  getCharacters(): Array<Character> {
    return CHARACTERS;
  }
}

const CHARACTERS: Array<Character> = [
  {
    id: 1,
    characterName: 'Adam',
    dateOfBirth: '50 BCE',
    dateOfDeath: '3096 BCE',
    fatherName: null,
    motherName: null,
    sonName: 3,
    fatherAgeAtBirth: 130,
    fatherContinuedToLive: 800,
    reference: 'Gen 5:3-5',
    description: ''
  },
  {
    id: 2,
    characterName: 'Eve',
    dateOfBirth: '100 BCE',
    dateOfDeath: '3096 BCE',
    fatherName: null,
    motherName: null,
    sonName: 3,
    fatherAgeAtBirth: 130,
    fatherContinuedToLive: 800,
    reference: 'Gen 5:3-5',
    description: ''
  },
  {
    id: 3,
    characterName: 'Seth',
    dateOfBirth: '2896 BCE',
    dateOfDeath: '2984 BCE',
    fatherName: 1,
    motherName: 2,
    sonName: 4,
    fatherAgeAtBirth: 105,
    fatherContinuedToLive: 807,
    reference: 'Gen 5:6-8',
    description: ''
  },
  {
    id: 4,
    characterName: 'E\'nosh',
    dateOfBirth: '3791 BCE',
    dateOfDeath: '2976 BCE',
    fatherName: 1,
    motherName: 2,
    sonName: null,
    fatherAgeAtBirth: 90,
    fatherContinuedToLive: 815,
    reference: 'Gen 5:12-14',
    description: ''
  }
];
