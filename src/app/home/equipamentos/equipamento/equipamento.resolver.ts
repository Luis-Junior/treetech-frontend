import { Equipamento } from './../../../shared/services/equipamentos/Equipamento';
import { EquipamentosService } from './../../../shared/services/equipamentos/equipamentos.service';
import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EquipamentoResolver implements Resolve<Equipamento> {

  constructor(
    private equipamentosService:EquipamentosService
  ){}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Equipamento> {
    return this.equipamentosService.getById(route.params.id);
  }
}
