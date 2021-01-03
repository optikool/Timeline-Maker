import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { CharacterEffects } from './character.effects';

describe('CharacterEffects', () => {
  let actions$: Observable<any>;
  let effects: CharacterEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        CharacterEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.inject(CharacterEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
