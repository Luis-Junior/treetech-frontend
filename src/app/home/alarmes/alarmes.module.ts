import { EquipamentosModule } from './../equipamentos/equipamentos.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlarmesRoutingModule } from './alarmes-routing.module';
import { AlarmesComponent } from './alarmes.component';
import { AccordionAlarmeComponent } from './accordion-alarme/accordion-alarme.component';
import { TabelaAlarmesComponent } from './tabela-alarmes/tabela-alarmes.component';
import { AlarmeComponent } from './alarme/alarme.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AlarmesComponent,
    AccordionAlarmeComponent,
    TabelaAlarmesComponent,
    AlarmeComponent
  ],
  imports: [
    CommonModule,
    AlarmesRoutingModule,
    ReactiveFormsModule,
  ],
  exports:[
    AccordionAlarmeComponent,
    TabelaAlarmesComponent
  ]
})
export class AlarmesModule { }
