import { ReactiveFormsModule } from '@angular/forms';
import { OrderSwitcherModule } from './../../shared/components/order-switcher/order-switcher.module';
import { UtilsModule } from './../../shared/utils/utils.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LogsRoutingModule } from './logs-routing.module';
import { LogsComponent } from './logs.component';


@NgModule({
  declarations: [
    LogsComponent
  ],
  imports: [
    CommonModule,
    LogsRoutingModule,
    OrderSwitcherModule,
    ReactiveFormsModule,
    UtilsModule
  ]
})
export class LogsModule { }
