import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderSwitcherComponent } from './order-switcher.component';



@NgModule({
  declarations: [
    OrderSwitcherComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    OrderSwitcherComponent
  ]
})
export class OrderSwitcherModule { }
