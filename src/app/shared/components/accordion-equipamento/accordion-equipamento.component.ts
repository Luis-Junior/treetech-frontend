import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { finalize } from 'rxjs/operators';

import { EquipamentosService } from './../../../shared/services/equipamentos/equipamentos.service';
import { ToastService } from './../../../shared/components/toast/toast.service';
import { Equipamento } from 'src/app/shared/services/equipamentos/Equipamento';
import { ToastType } from 'src/app/shared/components/toast/toast';

@Component({
  selector: 'app-accordion-equipamento',
  templateUrl: './accordion-equipamento.component.html',
  styleUrls: ['./accordion-equipamento.component.scss']
})
export class AccordionEquipamentoComponent implements OnInit {

  @Input() equipamento!:Equipamento
  @Input() ocultarAcoes = false

  @Output() aoExcluir = new EventEmitter<number>()

  opened = false

  constructor(
    private equipamentosService:EquipamentosService,
    private toastService:ToastService
  ) { }

  ngOnInit(): void {
  }

  toggle(){
    this.opened = !this.opened
  }
  
  delete(id: number) {
    this.equipamentosService.delete(id)
      .pipe(finalize(() => this.aoExcluir.emit()))
      .subscribe(
        () => this.toastService.showToast('Equipamento excluido com sucesso', ToastType.SUCESSO),
        (erro) => this.toastService.showToast('Existe um alarme relacionado a este equipamento', ToastType.PERIGO)
      )
  }
  

}
