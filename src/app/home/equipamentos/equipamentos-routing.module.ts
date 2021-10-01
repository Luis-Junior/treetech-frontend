import { AlarmesRelacionadosResolver } from './equipamento/alarmes-relacionados.resolver';
import { EquipamentoResolver } from './equipamento/equipamento.resolver';
import { EquipamentoComponent } from './equipamento/equipamento.component';
import { EquipamentosComponent } from './equipamentos.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component:EquipamentosComponent
  },
  {
    path: ':id',
    component: EquipamentoComponent,
    resolve: {
      equipamento: EquipamentoResolver,
      alarmesRelacionados: AlarmesRelacionadosResolver
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EquipamentosRoutingModule { }
