import { UtilsModule } from './../../shared/utils/utils.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { TabelaAlarmesModule } from './../../shared/components/tabela-alarmes/tabela-alarmes.module';
import { EquipamentosComponent } from './equipamentos.component';
import { EquipamentosRoutingModule } from './equipamentos-routing.module';
import { EquipamentoComponent } from './equipamento/equipamento.component';
import { AccordionAlarmeModule } from './../../shared/components/accordion-alarme/accordion-alarme.module';
import { AccordionEquipamentoModule } from './../../shared/components/accordion-equipamento/accordion-equipamento.module';
import { TabelaEquipamentosModule } from './../../shared/components/tabela-equipamentos/tabela-equipamentos.module';
import { NovoEquipamentoComponent } from './novo-equipamento/novo-equipamento.component';



@NgModule({
  declarations: [
    EquipamentosComponent,
    EquipamentoComponent,
    NovoEquipamentoComponent,
  ],
  imports: [
    CommonModule,
    EquipamentosRoutingModule,
    TabelaAlarmesModule,
    AccordionAlarmeModule,
    ReactiveFormsModule,
    TabelaEquipamentosModule,
    AccordionEquipamentoModule,
    UtilsModule
  ]
})
export class EquipamentosModule { }
