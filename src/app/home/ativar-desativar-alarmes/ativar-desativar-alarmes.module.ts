import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AtivarDesativarAlarmesRoutingModule } from './ativar-desativar-alarmes-routing.module';
import { AtivarDesativarAlarmesComponent } from './ativar-desativar-alarmes.component';


@NgModule({
  declarations: [
    AtivarDesativarAlarmesComponent
  ],
  imports: [
    CommonModule,
    AtivarDesativarAlarmesRoutingModule
  ]
})
export class AtivarDesativarAlarmesModule { }
