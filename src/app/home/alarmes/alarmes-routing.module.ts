import { AlarmeResolver } from './alarme/alarme.resolver';
import { AlarmeComponent } from './alarme/alarme.component';
import { AlarmesComponent } from './alarmes.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component:AlarmesComponent,
    data:{
      title: 'Listagem de alarmes' 
    }
  },
  {
    path: ':id',
    component: AlarmeComponent,
    resolve:{
      alarme: AlarmeResolver
    },
    data:{
      title: 'Alarme'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AlarmesRoutingModule { }
