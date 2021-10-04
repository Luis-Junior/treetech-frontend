import { HttpParams } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-order-switcher',
  templateUrl: './order-switcher.component.html',
  styleUrls: ['./order-switcher.component.scss']
})
export class OrderSwitcherComponent implements OnInit {
  @Input() ordenarPor = ''
  @Input() reverse = false
  @Output() aoAlterar = new EventEmitter<HttpParams>()
  constructor() { }

  ngOnInit(): void {
  }

  toggle(){
    this.reverse = !this.reverse
    let params = new HttpParams()
    params = params.set('ordenar', this.ordenarPor)
    params = params.set('reverse', this.reverse.toString())
    this.aoAlterar.emit(params)
  }

}
