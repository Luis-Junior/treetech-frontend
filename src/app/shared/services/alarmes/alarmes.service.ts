import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Alarme } from './Alarme';

const API = environment.api + 'alarmes'

@Injectable({
  providedIn: 'root'
})
export class AlarmesService {

  constructor(
    private http: HttpClient
  ) { }


  getAll(params?:HttpParams){
    return this.http.get<Alarme[]>(API,{params})
  }
  
  delete(id:number){
    return this.http.delete(`${API}/${id}`)
  }

  getById(id:number){
    return this.http.get<Alarme>(`${API}/${id}`)
  }
  
  update(alarmeUpdate:any){
    return this.http.put(`${API}/${alarmeUpdate.id}`, alarmeUpdate)
  }

  create(alarme:any){
    return this.http.post(`${API}`, alarme)

  }

  filterByClassificacao(classificacao_id:number){
    return this.http.get<Alarme[]>(`${API}/findByClassificacao/${classificacao_id}`)
  }

  ativarAlarme(id:number){
    return this.http.get(`${API}/ativarAlarme/${id}`)
  }
  desativarAlarme(id:number){
    return this.http.get(`${API}/desativarAlarme/${id}`)
  }
  alarmesMaisAtuados(){
    return this.http.get<Alarme[]>(`${API}/maisAtuados`)
  }
}
