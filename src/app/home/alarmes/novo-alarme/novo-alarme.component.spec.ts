import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NovoAlarmeComponent } from './novo-alarme.component';

describe('NovoAlarmeComponent', () => {
  let component: NovoAlarmeComponent;
  let fixture: ComponentFixture<NovoAlarmeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NovoAlarmeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NovoAlarmeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
