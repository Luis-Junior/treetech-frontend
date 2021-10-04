import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtivarDesativarAlarmesComponent } from './ativar-desativar-alarmes.component';

describe('AtivarDesativarAlarmesComponent', () => {
  let component: AtivarDesativarAlarmesComponent;
  let fixture: ComponentFixture<AtivarDesativarAlarmesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AtivarDesativarAlarmesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AtivarDesativarAlarmesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
