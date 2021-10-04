import { Log } from './log';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

const API = environment.api + 'logs'

@Injectable({
  providedIn: 'root'
})
export class LogsService {


  constructor(
    private http:HttpClient
  ) { }

  getAll(params?:HttpParams){
    return this.http.get<Log[]>(API)
  }

}
