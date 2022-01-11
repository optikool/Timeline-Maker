import { TestBed, waitForAsync } from '@angular/core/testing';
import { MockStore, provideMockStore } from '@ngrx/store/testing';

import { TimelineResolver } from './timeline.resolver';
import { initialState } from '../views/characters/store';
import { myCharacters } from '../core/services/character.service';
import { ActivatedRouteSnapshot, convertToParamMap, RouterStateSnapshot } from '@angular/router';

describe('TimelineResolver', () => {
  let timelineResolver: TimelineResolver;
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
      timelineResolver = TestBed.inject(TimelineResolver);
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
    expect(timelineResolver).toBeTruthy();
  });

  it('should call store dispach', () => {
    spyOn(store, 'dispatch');
    timelineResolver.resolve(route, state);
    expect(store.dispatch).toHaveBeenCalledTimes(1);
  });

  it('should return NONE Observable', () => {
    timelineResolver.resolve(route, state).subscribe(result => {
      expect(result).toEqual('NONE');
    });
  });
});
