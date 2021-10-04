import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccordionDesativarAtiavarAlarmesComponent } from './accordion-desativar-atiavar-alarmes.component';

describe('AccordionDesativarAtiavarAlarmesComponent', () => {
  let component: AccordionDesativarAtiavarAlarmesComponent;
  let fixture: ComponentFixture<AccordionDesativarAtiavarAlarmesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccordionDesativarAtiavarAlarmesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccordionDesativarAtiavarAlarmesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
