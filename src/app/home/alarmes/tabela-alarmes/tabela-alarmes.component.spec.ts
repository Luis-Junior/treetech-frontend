import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabelaAlarmesComponent } from './tabela-alarmes.component';

describe('TabelaAlarmesComponent', () => {
  let component: TabelaAlarmesComponent;
  let fixture: ComponentFixture<TabelaAlarmesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabelaAlarmesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TabelaAlarmesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
