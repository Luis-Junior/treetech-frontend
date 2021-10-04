import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccordionEquipamentoComponent } from './accordion-equipamento.component';



@NgModule({
  declarations: [
    AccordionEquipamentoComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[
    AccordionEquipamentoComponent
  ]
})
export class AccordionEquipamentoModule { }
