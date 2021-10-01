import { Toast, ToastType } from './toast';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  toastSubject = new Subject<Toast>()

  constructor() { }


  getToast(){
    return this.toastSubject.asObservable()
  }

  showToast(texto:string, tipo: ToastType, delay: number = 3500){
    this.toastSubject.next({texto,tipo,delay})
  }

}
