import { EquipamentosModule } from './equipamentos/equipamentos.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { InicioComponent } from './inicio/inicio.component';


@NgModule({
  declarations: [
    HomeComponent,
    SidebarComponent,
    InicioComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    EquipamentosModule
  ]
})
export class HomeModule { }
