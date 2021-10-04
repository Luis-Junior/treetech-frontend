import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { finalize } from 'rxjs/operators';

import { Alarme } from '../../services/alarmes/Alarme';
import { AlarmesService } from '../../services/alarmes/alarmes.service';
import { ToastType } from '../toast/toast';
import { ToastService } from '../toast/toast.service';


@Component({
  selector: 'app-accordion-alarme',
  templateUrl: './accordion-alarme.component.html',
  styleUrls: ['./accordion-alarme.component.scss']
})
export class AccordionAlarmeComponent implements OnInit {

  @Input() alarme!:Alarme
  @Output() aoExcluir = new EventEmitter<number>()

  opened = false

  constructor(
    private alarmesService: AlarmesService,
    private toastService:ToastService
  ) { }

  ngOnInit(): void {
  }

  toggle(){
    this.opened = !this.opened
  }

  delete(id:number){
    this.alarmesService.delete(id)
      .pipe(finalize(()=>this.aoExcluir.emit()))
      .subscribe(
        ()=>this.toastService.showToast('Alarme excluido com sucesso', ToastType.SUCESSO),
        (erro)=>this.toastService.showToast('Erro ao excluir alarme', ToastType.PERIGO)
        )
  }

}
