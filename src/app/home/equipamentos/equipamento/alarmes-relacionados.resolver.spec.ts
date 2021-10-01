import { TestBed } from '@angular/core/testing';

import { AlarmesRelacionadosResolver } from './alarmes-relacionados.resolver';

describe('AlarmesRelacionadosResolver', () => {
  let resolver: AlarmesRelacionadosResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(AlarmesRelacionadosResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
