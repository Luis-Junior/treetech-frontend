import { AlarmesModule } from './../alarmes/alarmes.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EquipamentosComponent } from './equipamentos.component';
import { AccordionEquipamentoComponent } from './accordion-equipamento/accordion-equipamento.component';
import { EquipamentosRoutingModule } from './equipamentos-routing.module';
import { EquipamentoComponent } from './equipamento/equipamento.component';
import { TabelaEquipamentosComponent } from './tabela-equipamentos/tabela-equipamentos.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    EquipamentosComponent,
    AccordionEquipamentoComponent,
    EquipamentoComponent,
    TabelaEquipamentosComponent
  ],
  imports: [
    CommonModule,
    EquipamentosRoutingModule,
    AlarmesModule,
    ReactiveFormsModule
  ]
})
export class EquipamentosModule { }
