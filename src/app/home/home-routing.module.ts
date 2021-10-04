import { InicioComponent } from './inicio/inicio.component';
import { EquipamentosComponent } from './equipamentos/equipamentos.component';
import { HomeComponent } from './home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: '',
        component: InicioComponent,
        data:{
          title: 'Home'
        }
      },
      {
        path: 'equipamentos',
        loadChildren:()=>import('./equipamentos/equipamentos.module').then((m)=>m.EquipamentosModule),
      },
      {
        path: 'alarmes',
        loadChildren:()=>import('./alarmes/alarmes.module').then((m)=>m.AlarmesModule),
      },
      {
        path: 'ativar-desativar-alarmes',
        loadChildren:()=>import('./ativar-desativar-alarmes/ativar-desativar-alarmes.module').then((m)=>m.AtivarDesativarAlarmesModule)
      },
      {
        path: 'logs',
        loadChildren:()=>import('./logs/logs.module').then((m)=>m.LogsModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
