import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Character } from 'src/app/models/character.model';
import { CharacterState } from '../characters/store';
import { selectCharacterTree } from '../characters/store/character.selectors';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss']
})
export class TimelineComponent implements OnInit {
  public dataSource: Character[];
  ngOnDestroy$ = new Subject();
  
  constructor(
    private store: Store<CharacterState>
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
}
