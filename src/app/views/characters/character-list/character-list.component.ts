import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Character } from '../../../core/models/character.model';
import { CharacterService } from '../../../core/services/character.service';
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
    console.log('navigateToPage page: ', page);
    this.characerService.navigateToPage(page);
  }

  deleteCharacter(id: number): void {
    this.store.dispatch(fromActions.deleteCharacter({id}));
  }
}
