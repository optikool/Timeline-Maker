import { TestBed } from '@angular/core/testing';

import { TimelineResolver } from './timeline.resolver';

describe('TimelineResolver', () => {
  let resolver: TimelineResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(TimelineResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
