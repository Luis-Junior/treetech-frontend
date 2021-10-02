import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageIndicatorComponent } from './page-indicator.component';



@NgModule({
  declarations: [
    PageIndicatorComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    PageIndicatorComponent
  ]
})
export class PageIndicatorModule { }
