import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Character } from 'src/app/models/character.model';
import { CharacterService } from 'src/app/services/character.service';
import { CharacterState } from '../store';
import * as fromActions from '../store/character.actions'
import { selectCharacters } from '../store/character.selectors';

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.scss']
})
export class CharacterListComponent implements OnInit {
  public dataSource: Character[];
  public displayedColumns: string[] = [
    'id',
    'characterName', 
    'dateOfBirth', 
    'dateOfDeath',
    'fatherName',
    'motherName',
    'sonName',
    'fatherAgeAtBirth',
    'fatherContinuedToLive',
    'fatherContinuedToLive',
    'reference',
    'actions'
  ];

  constructor(
    private characerService: CharacterService,
    private router: Router,
    private store: Store<CharacterState>) {
      this.dataSource = [];
    }

  ngOnInit(): void {
    
    this.loadCharacters();
  }

  loadCharacters(): void {
    this.store.pipe(select(selectCharacters))
      .subscribe(data => {
        this.dataSource = data;
      });
  }

  navigateToPage(page: string[]): void {
    this.characerService.navigateToPage(page);
  }

  deleteCharacter(id: number): void {
    this.store.dispatch(fromActions.deleteCharacter({id}));
  }
}
