import { HttpParams } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-order-menu',
  templateUrl: './order-menu.component.html',
  styleUrls: ['./order-menu.component.scss']
})
export class OrderMenuComponent implements OnInit {

  show = false
  @Input() opcoes:string[] = []
  @Output() aoEscolher = new EventEmitter()

  constructor() { }

  ngOnInit(): void {
  }

  showMenu(){
    this.show = !this.show
  }

  filtrarPor(opcao:number){
    this.show = false
    this.aoEscolher.emit(opcao)
  }


}
