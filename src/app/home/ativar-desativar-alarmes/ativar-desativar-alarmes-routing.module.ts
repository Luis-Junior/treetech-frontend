import { AtivarDesativarAlarmesComponent } from './ativar-desativar-alarmes.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: AtivarDesativarAlarmesComponent,
    data:{
      title: 'Ativar/Desativar alarmes'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AtivarDesativarAlarmesRoutingModule { }
