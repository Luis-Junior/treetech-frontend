import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { Alarme } from 'src/app/shared/services/alarmes/Alarme';
import { EquipamentosService } from 'src/app/shared/services/equipamentos/equipamentos.service';

@Injectable({
  providedIn: 'root'
})
export class AlarmesRelacionadosResolver implements Resolve<Alarme[]> {
  constructor(
    private equipamentosService:EquipamentosService
  ){}
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Alarme[]> {
    return this.equipamentosService.getAlarmesrelacionados(route.params.id);
  }
}
