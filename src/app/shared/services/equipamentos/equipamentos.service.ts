import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Alarme } from '../alarmes/Alarme';
import { Equipamento } from './Equipamento';

const API = environment.api + 'equipamentos'

@Injectable({
  providedIn: 'root'
})
export class EquipamentosService {

  constructor(
    private http: HttpClient
  ) { }


  getAll(){
    return this.http.get<Equipamento[]>(API)
  }

  delete(id:number){
    return this.http.delete( `${API}/${id}`)
  }

  getById(id:number){
    return this.http.get<Equipamento>(`${API}/${id}`)
  }

  getAlarmesrelacionados(id_equipamento:number){
    return this.http.get<Alarme[]>(`${API}/alarmes-relacionados/${id_equipamento}`)
  }
  
  update(equipamento_id:number, equipamento:any){
    return this.http.put(`${API}/${equipamento_id}`, equipamento)
  }
}
