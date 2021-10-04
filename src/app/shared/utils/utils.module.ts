import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterAlarmePipe } from './pipes/filter-alarme.pipe';
import { FilterEquipamentoPipe } from './pipes/filter-equipamento.pipe';



@NgModule({
  declarations: [
    FilterAlarmePipe,
    FilterEquipamentoPipe
  ],
  imports: [
    CommonModule
  ],
  exports:[
    FilterAlarmePipe,
    FilterEquipamentoPipe
  ]
})
export class UtilsModule { }
