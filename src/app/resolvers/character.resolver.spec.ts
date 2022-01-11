import { fakeAsync, TestBed, waitForAsync } from '@angular/core/testing';
import { ActivatedRouteSnapshot, convertToParamMap, RouterStateSnapshot } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { myCharacters } from '../core/services/character.service';
import { initialState } from '../views/characters/store';

import { CharacterResolver } from './character.resolver';

describe('CharacterResolver', () => {
  let characterResolver: CharacterResolver;
  let store: MockStore;
  let state: RouterStateSnapshot;
  let route = {
    paramMap: {
      get: (id) => 2
    }
  } as unknown as ActivatedRouteSnapshot;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [ RouterTestingModule ],
      providers: [
        provideMockStore({ initialState }),
        { provide: ActivatedRouteSnapshot, useValue: { snapshot: { paramMap: convertToParamMap({ id: 2 })}}},
        { provide: RouterStateSnapshot, useValue: { snapshot: { url: '' }}},
      ]
    })
    .compileComponents()
    .then(() => {
      characterResolver = TestBed.inject(CharacterResolver);
      state = TestBed.inject(RouterStateSnapshot);
      store = TestBed.inject(MockStore);
      store.setState({
        characters: myCharacters
      });
      store.refreshState();
    });
  }));

  it('should be created', () => {
    expect(characterResolver).toBeTruthy();
  });

  it('should call store dispach', () => {
    spyOn(store, 'dispatch');
    const spyRoute = spyOn(route.paramMap, 'get');
    spyRoute.and.returnValue('2');
    characterResolver.resolve(route, state);
    expect(store.dispatch).toHaveBeenCalledTimes(2);
  });

  it('should return NONE Observable', fakeAsync(() => {
    characterResolver.resolve(route, state).subscribe(result => {
      expect(result).toEqual('NONE');
    });
  }));
});
