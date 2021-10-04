import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterAlarmePipe } from './pipes/filter-alarme.pipe';
import { FilterEquipamentoPipe } from './pipes/filter-equipamento.pipe';
import { FilterLogPipe } from './pipes/filter-log.pipe';



@NgModule({
  declarations: [
    FilterAlarmePipe,
    FilterEquipamentoPipe,
    FilterLogPipe
  ],
  imports: [
    CommonModule
  ],
  exports:[
    FilterAlarmePipe,
    FilterEquipamentoPipe,
    FilterLogPipe
  ]
})
export class UtilsModule { }
