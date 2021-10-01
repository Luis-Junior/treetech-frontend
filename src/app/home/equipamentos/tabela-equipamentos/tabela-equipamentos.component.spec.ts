import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabelaEquipamentosComponent } from './tabela-equipamentos.component';

describe('TabelaEquipamentosComponent', () => {
  let component: TabelaEquipamentosComponent;
  let fixture: ComponentFixture<TabelaEquipamentosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabelaEquipamentosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TabelaEquipamentosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
