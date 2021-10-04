import { OrderSwitcherModule } from './../order-switcher/order-switcher.module';
import { OrderMenuModule } from './../order-menu/order-menu.module';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabelaEquipamentosComponent } from './tabela-equipamentos.component';



@NgModule({
  declarations: [
    TabelaEquipamentosComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    OrderMenuModule,
    OrderSwitcherModule
  ],
  exports:[
    TabelaEquipamentosComponent
  ]
})
export class TabelaEquipamentosModule { }
