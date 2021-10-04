import { HttpClient, HttpParams } from '@angular/common/http';
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


  getAll(params?:HttpParams){
    return this.http.get<Equipamento[]>(API,{params})
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

  filterByName(params:HttpParams){
    return this.http.get<Equipamento[]>(`${API}/filter`,{params})
  }

  create(equipamento:any){
    return this.http.post(API, equipamento)
  }
  
  filterByTipo(tipo_id:number){
    return this.http.get<Equipamento[]>(`${API}/findByTipo/${tipo_id}`)
  }
}
