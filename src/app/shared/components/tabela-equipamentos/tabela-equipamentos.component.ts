import { HttpParams } from '@angular/common/http';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { finalize } from 'rxjs/operators';

import { Equipamento } from '../../services/equipamentos/Equipamento';
import { EquipamentosService } from '../../services/equipamentos/equipamentos.service';
import { ToastType } from '../toast/toast';
import { ToastService } from '../toast/toast.service';



@Component({
  selector: 'app-tabela-equipamentos',
  templateUrl: './tabela-equipamentos.component.html',
  styleUrls: ['./tabela-equipamentos.component.scss']
})
export class TabelaEquipamentosComponent implements OnInit {

  @Input() equipamentos: Equipamento[] = []
  @Input() ocultarAcoes = false

  @Output() aoExcluir = new EventEmitter()

  constructor(
    private equipamentosService: EquipamentosService,
    private toastService: ToastService
  ) { }

  ngOnInit(): void {
  }


  delete(id: number) {
    this.equipamentosService.delete(id)
      .pipe(finalize(() => this.aoExcluir.emit()))
      .subscribe(
        () => this.toastService.showToast('Equipamento excluido com sucesso', ToastType.SUCESSO),
        (erro) => this.toastService.showToast('Existe um alarme relacionado a este equipamento', ToastType.PERIGO)
      )
  }

  getEquipamentos(params:HttpParams){
    this.equipamentosService.getAll(params).subscribe(
      equipamentos=>this.equipamentos = equipamentos
    )
  }

  filtrarPorTipo(tipo_id:number){
    if(tipo_id === 0){
      let params = new HttpParams()
      this.getEquipamentos(params)
    }else{
      this.equipamentosService.filterByTipo(tipo_id).subscribe(equipamentos=>this.equipamentos=equipamentos)
    }
  }

}
