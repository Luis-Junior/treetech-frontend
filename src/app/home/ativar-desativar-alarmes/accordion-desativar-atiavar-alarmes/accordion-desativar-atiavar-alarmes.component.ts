import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Alarme } from 'src/app/shared/services/alarmes/Alarme';

@Component({
  selector: 'app-accordion-desativar-atiavar-alarmes',
  templateUrl: './accordion-desativar-atiavar-alarmes.component.html',
  styleUrls: ['./accordion-desativar-atiavar-alarmes.component.scss']
})
export class AccordionDesativarAtiavarAlarmesComponent implements OnInit {

  @Input() alarme!:Alarme
  @Output() aoAlterarStatus = new EventEmitter()

  opened = false

  constructor() { }

  ngOnInit(): void {
  }

  toggle(){
    this.opened = !this.opened
  }

  toggleStatus(status_id:number, alarme_id:number){
    this.aoAlterarStatus.emit({status_id,alarme_id})
  }

}
