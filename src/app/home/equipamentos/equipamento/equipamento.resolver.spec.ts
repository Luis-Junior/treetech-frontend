import { TestBed } from '@angular/core/testing';

import { EquipamentoResolver } from './equipamento.resolver';

describe('EquipamentoResolver', () => {
  let resolver: EquipamentoResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(EquipamentoResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
