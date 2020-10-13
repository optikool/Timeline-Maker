import { TestBed } from '@angular/core/testing';

import { MembersResolverService } from './members-resolver.service';

describe('MembersResolverService', () => {
  let service: MembersResolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MembersResolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
