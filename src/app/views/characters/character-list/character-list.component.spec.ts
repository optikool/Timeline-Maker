import { DebugElement } from '@angular/core';
import { ComponentFixture, fakeAsync, flush, TestBed, waitForAsync } from '@angular/core/testing';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { CharacterService } from '../../../core/services/character.service';
import { CharacterState, initialState } from '../store';

import { CharacterListComponent } from './character-list.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('CharacterListComponent', () => {
  let component: CharacterListComponent;
  let fixture: ComponentFixture<CharacterListComponent>;
  let el: DebugElement;
  let mockCharacterService: CharacterService;
  let store: MockStore<CharacterState>;

  beforeEach(waitForAsync(() => {
    mockCharacterService = jasmine.createSpyObj('mockCharacterService', ['navigateToPage']);

    TestBed.configureTestingModule({
      declarations: [ CharacterListComponent ],
      imports: [
        RouterTestingModule
      ],
      providers: [
        provideMockStore({ initialState }),
        { provide: CharacterService, useValue: mockCharacterService },
      ]
    })
    .compileComponents()
    .then(() => {
      fixture = TestBed.createComponent(CharacterListComponent);
      component = fixture.componentInstance;
      el = fixture.debugElement;
      store = TestBed.inject(MockStore);// as MockStore<CharacterState>;
      spyOn(store, 'dispatch').and.callThrough();

    });
  }));

  it('should create CharacterListComponent', () => {
    expect(component).toBeTruthy();
  });

  it('should call navigate to page', fakeAsync(() => {
    pending();
    store.setState({
      ...initialState,
      characters: [{
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
      }]
    });
    const path = ['/character-edit', '4'];

    fixture.detectChanges();

    component.navigateToPage(path);

    flush();
    //expect(store.dispatch).toHaveBeenCalledTimes(1);
    //expect(mockCharacterService.navigateToPage).toHaveBeenCalled();
  }));
});
