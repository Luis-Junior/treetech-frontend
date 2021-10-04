import { OrderMenuModule } from './../order-menu/order-menu.module';
import { OrderSwitcherModule } from './../order-switcher/order-switcher.module';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabelaAlarmesComponent } from './tabela-alarmes.component';



@NgModule({
  declarations: [
    TabelaAlarmesComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    OrderSwitcherModule,
    OrderMenuModule
  ],
  exports:[
    TabelaAlarmesComponent
  ]
})
export class TabelaAlarmesModule { }
