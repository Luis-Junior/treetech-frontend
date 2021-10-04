import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OrderSwitcherModule } from './../../shared/components/order-switcher/order-switcher.module';
import { UtilsModule } from './../../shared/utils/utils.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AtivarDesativarAlarmesRoutingModule } from './ativar-desativar-alarmes-routing.module';
import { AtivarDesativarAlarmesComponent } from './ativar-desativar-alarmes.component';
import { OrderMenuModule } from 'src/app/shared/components/order-menu/order-menu.module';
import { AccordionDesativarAtiavarAlarmesComponent } from './accordion-desativar-atiavar-alarmes/accordion-desativar-atiavar-alarmes.component';


@NgModule({
  declarations: [
    AtivarDesativarAlarmesComponent,
    AccordionDesativarAtiavarAlarmesComponent
  ],
  imports: [
    CommonModule,
    AtivarDesativarAlarmesRoutingModule,
    ReactiveFormsModule,
    OrderSwitcherModule,
    OrderMenuModule,
    UtilsModule
  ]
})
export class AtivarDesativarAlarmesModule { }
