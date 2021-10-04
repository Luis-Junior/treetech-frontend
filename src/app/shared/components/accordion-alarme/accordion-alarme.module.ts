import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccordionAlarmeComponent } from './accordion-alarme.component';



@NgModule({
  declarations: [
    AccordionAlarmeComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[
    AccordionAlarmeComponent
  ]
})
export class AccordionAlarmeModule { }
