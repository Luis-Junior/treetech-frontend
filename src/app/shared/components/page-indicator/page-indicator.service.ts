import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PageIndicatorService {

  pageTitleSubject = new BehaviorSubject<string>('')

  constructor() { }

  getPage(){
    return this.pageTitleSubject.asObservable()
  }

  setPage(pageTitle:string){
    this.pageTitleSubject.next(pageTitle)
  }
  
}
