import { Alarme } from './../../../shared/services/alarmes/Alarme';
import { AlarmesService } from 'src/app/shared/services/alarmes/alarmes.service';
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
export class AlarmeResolver implements Resolve<Alarme> {
  constructor(
    private alarmesService:AlarmesService
  ){}
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Alarme> {
    return this.alarmesService.getById(route.params.id);
  }
}
