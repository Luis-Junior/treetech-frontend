import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlarmesRoutingModule } from './alarmes-routing.module';
import { AlarmesComponent } from './alarmes.component';
import { AccordionAlarmeComponent } from './accordion-alarme/accordion-alarme.component';
import { TabelaAlarmesComponent } from './tabela-alarmes/tabela-alarmes.component';


@NgModule({
  declarations: [
    AlarmesComponent,
    AccordionAlarmeComponent,
    TabelaAlarmesComponent
  ],
  imports: [
    CommonModule,
    AlarmesRoutingModule
  ],
  exports:[
    AccordionAlarmeComponent,
    TabelaAlarmesComponent
  ]
})
export class AlarmesModule { }
