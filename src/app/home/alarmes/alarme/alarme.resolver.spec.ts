import { TestBed } from '@angular/core/testing';

import { AlarmeResolver } from './alarme.resolver';

describe('AlarmeResolver', () => {
  let resolver: AlarmeResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(AlarmeResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
