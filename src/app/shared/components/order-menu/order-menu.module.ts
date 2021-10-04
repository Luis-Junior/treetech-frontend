import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderMenuComponent } from './order-menu.component';



@NgModule({
  declarations: [
    OrderMenuComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    OrderMenuComponent
  ]
})
export class OrderMenuModule { }
