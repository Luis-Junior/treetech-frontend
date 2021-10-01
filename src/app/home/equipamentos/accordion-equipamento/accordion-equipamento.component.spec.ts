import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccordionEquipamentoComponent } from './accordion-equipamento.component';

describe('AccordionEquipamentoComponent', () => {
  let component: AccordionEquipamentoComponent;
  let fixture: ComponentFixture<AccordionEquipamentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccordionEquipamentoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccordionEquipamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
