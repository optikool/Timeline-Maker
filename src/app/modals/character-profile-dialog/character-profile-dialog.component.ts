import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { select, Store } from '@ngrx/store';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Family } from 'src/app/models/character.model';
import { CharacterState } from 'src/app/views/characters/store';
import { selectCharacter } from 'src/app/views/characters/store/character.selectors';
import * as fromActions from '../../views/characters/store/character.actions';

@Component({
  selector: 'app-character-profile-dialog',
  templateUrl: './character-profile-dialog.component.html',
  styleUrls: ['./character-profile-dialog.component.css']
})
export class CharacterProfileDialogComponent implements OnInit {
  public characterProfile: Family;
  private ngDestroy$ = new Subject();

  constructor(
    public dialogRef: MatDialogRef<CharacterProfileDialogComponent>,
    private readonly store: Store<CharacterState>
  ) { }

  ngOnInit(): void {
    this.store.pipe(select(selectCharacter))
      .pipe(takeUntil(this.ngDestroy$))
      .subscribe((data: Family) => {
        console.log('data: ', data);
        this.characterProfile = data;
      });
  }

  ngOnDestroy(): void {
    this.ngDestroy$.next(true);
    this.ngDestroy$.complete();
  }

  loadProfile(id: number): void {
    console.log('Loading character id: ', id);
    this.store.dispatch(fromActions.loadCharacter({id: id}));
  }

  closeDialog(): void {
    this.dialogRef.close();
  }
}
