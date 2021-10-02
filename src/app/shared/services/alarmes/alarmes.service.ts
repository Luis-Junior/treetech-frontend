import { HttpClient } from '@angular/common/http';
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


  getAll(){
    return this.http.get<Alarme[]>(API)
  }
  
  delete(id:number){
    return this.http.delete(`${API}/${id}`)
  }

  getById(id:number){
    return this.http.get<Alarme>(`${API}/${id}`)
  }

}
