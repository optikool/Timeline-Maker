import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of, throwError } from 'rxjs';
import { ElectronService } from 'ngx-electron';
import { Character, CharacterGenderList, Family, Parent } from '../models/character.model';
import { catchError } from 'rxjs/operators';
import { CharacterState } from '../views/characters/store';

let myCharacters: Character[] = [
  {
      id: 1,
      characterName: 'Adam',
      gender: 'M',
      dateOfBirth: '50',
      dateOfDeath: '3096',
      fatherId: 0,
      motherId: 0,
      children: [],
      fatherAgeAtBirth: 130,
      fatherContinuedToLive: 800,
      reference: 'Gen 5:3-5',
      description: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. Donec non enim in turpis pulvinar facilisis. Ut felis. Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat.'
  },
  {
      id: 2,
      characterName: 'Eve',
      gender: 'F',
      dateOfBirth: '100',
      dateOfDeath: '3096',
      fatherId: 0,
      motherId: 0,
      children: [],
      fatherAgeAtBirth: 130,
      fatherContinuedToLive: 800,
      reference: 'Gen 5:3-5',
      description: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. Donec non enim in turpis pulvinar facilisis. Ut felis.'
  },
  {
      id: 3,
      characterName: 'Seth',
      gender: 'M',
      dateOfBirth: '2896',
      dateOfDeath: '2984',
      fatherId: 1,
      motherId: 2,
      children: [],
      fatherAgeAtBirth: 105,
      fatherContinuedToLive: 807,
      reference: 'Gen 5:6-8',
      description: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. Donec non enim in turpis pulvinar facilisis. Ut felis. Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus'
  },
  {
      id: 4,
      characterName: 'E\'nosh',
      gender: 'M',
      dateOfBirth: '3791',
      dateOfDeath: '2976',
      fatherId: 3,
      motherId: 0,
      children: [],
      fatherAgeAtBirth: 90,
      fatherContinuedToLive: 815,
      reference: 'Gen 5:9-11',
      description: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui.'
  },
  {
      id: 5,
      characterName: 'Ca-l\nan',
      gender: 'M',
      dateOfBirth: '3701',
      dateOfDeath: '2861',
      fatherId: 4,
      motherId: 0,
      children: [],
      fatherAgeAtBirth: 70,
      fatherContinuedToLive: 840,
      reference: 'Gen 5:12-14',
      description: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. Donec non enim in turpis pulvinar facilisis. Ut felis. Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat.'
  },
  {
      id: 6,
      characterName: 'Ma-ha\'la-le-el',
      gender: 'M',
      dateOfBirth: '3631',
      dateOfDeath: '2801',
      fatherId: 5,
      motherId: 0,
      children: [],
      fatherAgeAtBirth: 65,
      fatherContinuedToLive: 830,
      reference: 'Gen 5:15-17',
      description: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. Donec non enim in turpis pulvinar facilisis. Ut felis. Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus'
  },
  {
      id: 7,
      characterName: 'Ja\'red',
      gender: 'M',
      dateOfBirth: '3566',
      dateOfDeath: '2604',
      fatherId: 6,
      motherId: 0,
      children: [],
      fatherAgeAtBirth: 162,
      fatherContinuedToLive: 800,
      reference: 'Gen 5:18-20',
      description: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. Donec non enim in turpis pulvinar facilisis. Ut felis. Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus'
  },
  {
      id: 8,
      characterName: 'E\'noch',
      gender: 'M',
      dateOfBirth: '3404',
      dateOfDeath: '2039',
      fatherId: 7,
      motherId: 0,
      children: [],
      fatherAgeAtBirth: 65,
      fatherContinuedToLive: 300,
      reference: 'Gen 5:21-23',
      description: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. Donec non enim in turpis pulvinar facilisis. Ut felis.'
  }
];

@Injectable({
  providedIn: 'root'
})
export class CharacterService {
  private characters: Character[] = [];
  private isElectron: boolean = false;

  constructor(
    private router: Router,
    private _electronService: ElectronService,
  ) {
    if (this._electronService.ipcRenderer !== null) {
      this.isElectron = true;
    }
    this.characters = myCharacters;

   }

  navigateToPage(page: string[]) {
    this.router.navigate(page);
  }

  getCharacter(action: { id: number, type: string }, currentCharacters: Character[]): Observable<Family | undefined> {
    const character = currentCharacters.find((data: Character) => action.id === data.id);
    const parentFather: Parent = this.getParent(character?.fatherId, currentCharacters);
    const parentMother: Parent = this.getParent(character?.motherId, currentCharacters);
    const children: Character[] = currentCharacters.filter(child => action.id === child.fatherId || action.id === child.motherId);
      
    return of({
      ...character,
      mother: parentMother,
      father: parentFather,
      children
    });
  }

  getCharacters(): Observable<Character[]> {
    if (this.isElectron) {
      return of(this._electronService.ipcRenderer.sendSync('get-characters')).pipe(
        catchError((error: any) => throwError(error.json))
      );
    } else {
      return of(this.characters);
    }
  }

  createCharacter(character: Character): Observable<Character[]> {
    console.log('createCharacter character: ', character);
    if (this.isElectron) {
      return of(this._electronService.ipcRenderer.sendSync('save-character', character)).pipe(
        catchError((error: any) => throwError(error.json))
      );
    } else {
      const newCharacter = {
        ...character,
        id: this.characters.length + 1
      };

      this.characters = this.characters.concat(newCharacter);
      return of(this.characters);
    }
  }

  updateCharacter(character: Character): Observable<Character[]> {
    console.log('updateCharacter character: ', character);
    if (this.isElectron) {
      return of(this._electronService.ipcRenderer.sendSync('update-character', character)).pipe(
        catchError((error: any) => throwError(error.json))
      );
    } else {
      this.characters = this.characters.map((data => {
        if (data.id !== character.id) return data;
        return {
          ...data,
          ...character
        }
      }));
    
      return of(this.characters);
    }
  }

  deleteCharacter(data: { id: number, type: string}): Observable<Character[]> {
    console.log('deleteCharacter data: ', data);
    if (this.isElectron) {
      return of(this._electronService.ipcRenderer.sendSync('delete-character', data)).pipe(
        catchError((error: any) => {
          console.log(`deleteCharacter error: ${error}`);
          return Observable.throw(error.json)})
      );
    } else {
      this.characters = this.characters.filter((character: Character) => character.id !== data.id);

      return of(this.characters);
    }
  }

  getGenderList(gender: string): Observable<CharacterGenderList[]> {
    if (this.isElectron) {
      return of(this._electronService.ipcRenderer.sendSync('get-gender-characters', gender)).pipe(
        catchError((error: any) => Observable.throw(error.json))
      );
    } else {
      const result: CharacterGenderList[] = this.characters.filter((character: Character) => character.gender.toLowerCase() === gender.toLowerCase());

      return of(result.map(data => {
        return {
          id: data.id,
          characterName: data.characterName
        }
      })); 
    }
  }

  generateTree(characterList: { characters: Character[], type: '' }, parent: number): Observable<Character[]> {
    let out: Character[] = [];
    out = this.getNewTree(characterList.characters, parent);
  
    return of(out);
  }

  private getParent(id: number, currentCharacters: Character[]): Parent {
    return currentCharacters.map(item => {
      return {
        id: item.id,
        name: item.characterName,
        gender: item.gender
      }
    }).find(item => id === item.id);
  }

  private getNewTree(characterList: Character[], parent: number): Character[] {
    let out: Character[] = [];

    for (let i in characterList) {
      if (characterList[i].fatherId == parent) {
        let children: Character[] = this.getNewTree(characterList, characterList[i].id);
        let newCharacter: Character = null;

        if (children.length) {
          newCharacter = {
            ...characterList[i],
            children
          };
        } else {
          newCharacter = characterList[i];
        }

        out.push(newCharacter);
      }
    }

    return out;
  }
}
