import { NovoEquipamentoComponent } from './novo-equipamento/novo-equipamento.component';
import { AlarmesRelacionadosResolver } from './equipamento/alarmes-relacionados.resolver';
import { EquipamentoResolver } from './equipamento/equipamento.resolver';
import { EquipamentoComponent } from './equipamento/equipamento.component';
import { EquipamentosComponent } from './equipamentos.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component:EquipamentosComponent,
    data:{
      title: 'Listagem de equipamentos'
    }
  },
  {
    path: 'novo',
    component: NovoEquipamentoComponent,
    data:{
      title: 'Novo equipamento'
    }
  },
  {
    path: ':id',
    component: EquipamentoComponent,
    resolve: {
      equipamento: EquipamentoResolver,
      alarmesRelacionados: AlarmesRelacionadosResolver
    },
    data:{
      title: 'Equipamento'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EquipamentosRoutingModule { }
