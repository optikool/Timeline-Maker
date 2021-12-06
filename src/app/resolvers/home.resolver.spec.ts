import { TestBed, waitForAsync } from '@angular/core/testing';
import { ActivatedRouteSnapshot, convertToParamMap, RouterStateSnapshot } from '@angular/router';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { myCharacters } from '../services/character.service';
import { initialState } from '../views/characters/store';

import { HomeResolver } from './home.resolver';

describe('HomeResolver', () => {
  let homeResolver: HomeResolver;
  let store: MockStore;
  let route: ActivatedRouteSnapshot;
  let state: RouterStateSnapshot;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      providers: [
        provideMockStore({ initialState }),
        { provide: ActivatedRouteSnapshot, useValue: { snapshot: { paramMap: convertToParamMap({ id: 1 }) }}},
        { provide: RouterStateSnapshot, useValue: { snapshot: { url: '' }}},
      ]
    })
    .compileComponents()
    .then(() => {
      homeResolver = TestBed.inject(HomeResolver);
      route = TestBed.inject(ActivatedRouteSnapshot);
      state = TestBed.inject(RouterStateSnapshot);
      store = TestBed.inject(MockStore);
      store.setState({
        characters: myCharacters
      });
      store.refreshState();
    });
  }));

  it('should be created', () => {
    expect(homeResolver).toBeTruthy();
  });

  it('should call store dispach', () => {
    spyOn(store, 'dispatch');
    homeResolver.resolve(route, state);
    expect(store.dispatch).toHaveBeenCalledTimes(1);
  });

  it('should return NONE Observable', () => {
    homeResolver.resolve(route, state).subscribe(result => {
      expect(result).toEqual('NONE');
    });
  });
});
