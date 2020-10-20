import { TestBed } from '@angular/core/testing';

import { CharacterResolverService } from './character-resolver.service';

describe('MemberResolverService', () => {
  let service: CharacterResolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CharacterResolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
