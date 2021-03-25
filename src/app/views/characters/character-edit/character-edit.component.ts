import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { select, Store } from '@ngrx/store';
import { Observable, Subject } from 'rxjs';
import { Character, Family } from 'src/app/models/character.model';
import { CharacterState } from '../store';
import * as fromActions from '../store/character.actions';
import { CharacterService } from 'src/app/services/character.service';
import { take, takeUntil } from 'rxjs/operators';
import { selectCharacter } from '../store/character.selectors';

@Component({
  selector: 'app-character-edit',
  templateUrl: './character-edit.component.html',
  styleUrls: ['./character-edit.component.scss']
})
export class CharacterEditComponent implements OnInit {
  controlsConfig = {};
  submitted: boolean;
  isNew: boolean;
  children: Character[];
  ngDestroy$ = new Subject();
  submitObservable$: Observable<Character>;

  constructor(
    private characerService: CharacterService,
    private readonly store: Store<CharacterState>
  ) {
    this.submitted = false;
    this.isNew = false;
    this.children =[];
  }

  ngOnInit(): void {
    this.store.pipe(select(selectCharacter))
      .pipe(takeUntil(this.ngDestroy$))
      .subscribe((data: Family) => {
        this.children = data.children;
        this.controlsConfig = {
          id: data.id,
          characterName: data.characterName,
          gender: data.gender,
          dateOfBirth: data.dateOfBirth,
          dateOfDeath: data.dateOfDeath,
          fatherId: data.fatherId,
          motherId: data.motherId,
          fatherAgeAtBirth: data.fatherAgeAtBirth,
          fatherContinuedToLive: data.fatherContinuedToLive,
          reference: data.reference,
          description: data.description
        };
      });
  }

  ngOnDestroy(): void {
    this.ngDestroy$.next(true);
    this.ngDestroy$.complete();
  }

  onSubmit(registerForm: FormGroup): void {
    this.submitted = true;
    console.log(`CharacterEditComponent onSubmit: ${registerForm.value}`);
    this.store.dispatch(fromActions.updateCharacter(registerForm.value))
    this.store
      .pipe(takeUntil(this.ngDestroy$))
      .pipe(take(1))
      .subscribe((response) => {
        if (!response.error) {
          this.submitted = false;
          registerForm.reset();
          this.navigateToPage(['/characters']);
        }
      });
  }

  onReset(registerForm: FormGroup): void {
    this.submitted = false;
    registerForm.reset();
    this.navigateToPage(['/characters']);
  }

  navigateToPage(page: string[]): void {
    this.characerService.navigateToPage(page);
  }
}
