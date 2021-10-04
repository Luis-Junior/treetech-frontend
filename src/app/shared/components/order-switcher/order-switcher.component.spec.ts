import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderSwitcherComponent } from './order-switcher.component';

describe('OrderSwitcherComponent', () => {
  let component: OrderSwitcherComponent;
  let fixture: ComponentFixture<OrderSwitcherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderSwitcherComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderSwitcherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
