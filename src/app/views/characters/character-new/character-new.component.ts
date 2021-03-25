import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Subject } from 'rxjs';
import { take, takeUntil } from 'rxjs/operators';
import { Character } from 'src/app/models/character.model';
import { CharacterService } from 'src/app/services/character.service';
import { CharacterState } from '../store';
import * as fromActions from '../store/character.actions';

@Component({
  selector: 'app-character-new',
  templateUrl: './character-new.component.html',
  styleUrls: ['./character-new.component.scss']
})
export class CharacterNewComponent implements OnInit {
  controlsConfig = {};
  children: Character[];
  submitted: boolean;
  isNew: boolean;
  ngOnDestroy$ = new Subject();

  constructor(
    private characerService: CharacterService,
    private readonly store: Store<CharacterState>
  ) {
    this.submitted = false;
    this.isNew = true;
    this.children =[];
  }

  ngOnInit(): void {
    this.controlsConfig = {
      id: null,
      characterName: '',
      gender: 'M',
      dateOfBirth: null,
      dateOfDeath: null,
      fatherId: null,
      motherId: null,
      fatherAgeAtBirth: null,
      fatherContinuedToLive: null,
      reference: '',
      description: ''
    };
  }

  ngOnDestroy(): void {
    this.ngOnDestroy$.next(true);
    this.ngOnDestroy$.complete();
  }

  onSubmit(registerForm: FormGroup): void {
    this.submitted = true;
    registerForm.value.fatherId = !registerForm.value.fatherId ? 0 : registerForm.value.fatherId;
    registerForm.value.motherId = !registerForm.value.motherId ? 0 : registerForm.value.motherId;
    console.log(`CharacterNewComponent onSubmit: ${registerForm.value}`);
    this.store.dispatch(fromActions.createCharacter(registerForm.value))
    this.store
      .pipe(takeUntil(this.ngOnDestroy$))
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
