import { UtilsModule } from './../../shared/utils/utils.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AlarmesRoutingModule } from './alarmes-routing.module';
import { AlarmesComponent } from './alarmes.component';
import { AlarmeComponent } from './alarme/alarme.component';
import { AccordionAlarmeModule } from './../../shared/components/accordion-alarme/accordion-alarme.module';
import { AccordionEquipamentoModule } from './../../shared/components/accordion-equipamento/accordion-equipamento.module';
import { TabelaEquipamentosModule } from './../../shared/components/tabela-equipamentos/tabela-equipamentos.module';
import { TabelaAlarmesModule } from './../../shared/components/tabela-alarmes/tabela-alarmes.module';
import { NovoAlarmeComponent } from './novo-alarme/novo-alarme.component';


@NgModule({
  declarations: [
    AlarmesComponent,
    AlarmeComponent,
    NovoAlarmeComponent
  ],
  imports: [
    CommonModule,
    AlarmesRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    TabelaAlarmesModule,
    AccordionAlarmeModule,
    TabelaEquipamentosModule,
    AccordionEquipamentoModule,
    UtilsModule
  ]
})
export class AlarmesModule { }
