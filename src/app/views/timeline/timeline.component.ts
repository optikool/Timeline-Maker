import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { select, Store } from '@ngrx/store';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { CharacterProfileDialogComponent } from 'src/app/modals/character-profile-dialog/character-profile-dialog.component';
import { Character } from 'src/app/models/character.model';
import { CharacterState } from '../characters/store';
import { selectCharacterTree } from '../characters/store/character.selectors';
import * as fromActions from '../characters/store/character.actions';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss']
})
export class TimelineComponent implements OnInit {
  public dataSource: Character[];
  ngOnDestroy$ = new Subject();
  
  constructor(
    private store: Store<CharacterState>,
    private dialog: MatDialog
    ) {
      this.dataSource = [];
    }

  ngOnInit(): void {
    this.store.pipe(select(selectCharacterTree))
      .pipe(takeUntil(this.ngOnDestroy$))
      .subscribe(data => {
        this.dataSource = data;
      });
  }

  ngOnDestroy(): void {
    this.ngOnDestroy$.next(true);
    this.ngOnDestroy$.complete();
  }

  openDialog(id: number): void {
    console.log('openDialog id: ', id);
    this.store.dispatch(fromActions.loadCharacter({id: id}));
    const dialogRef = this.dialog.open(CharacterProfileDialogComponent, {
      width: '600px',
      autoFocus: false,
      disableClose: true
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed: ', result);
    });
  }
}
