import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccordionAlarmeComponent } from './accordion-alarme.component';

describe('AccordionAlarmeComponent', () => {
  let component: AccordionAlarmeComponent;
  let fixture: ComponentFixture<AccordionAlarmeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccordionAlarmeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccordionAlarmeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
