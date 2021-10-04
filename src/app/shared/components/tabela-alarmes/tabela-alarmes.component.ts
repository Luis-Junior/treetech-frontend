import { HttpParams } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { finalize } from 'rxjs/operators';
import { Alarme } from '../../services/alarmes/Alarme';
import { AlarmesService } from '../../services/alarmes/alarmes.service';
import { ToastType } from '../toast/toast';
import { ToastService } from '../toast/toast.service';



@Component({
  selector: 'app-tabela-alarmes',
  templateUrl: './tabela-alarmes.component.html',
  styleUrls: ['./tabela-alarmes.component.scss']
})
export class TabelaAlarmesComponent implements OnInit {

  @Input() alarmes:Alarme[] = []
  @Output() aoExcluir = new EventEmitter

  constructor(
    private alarmesService: AlarmesService,
    private toastService:ToastService
  ) { }

  ngOnInit(): void {
  }
  
  delete(id:number){
    this.alarmesService.delete(id)
      .pipe(finalize(()=>this.aoExcluir.emit()))
      .subscribe(
        ()=>this.toastService.showToast('Alarme excluido com sucesso', ToastType.SUCESSO),
        (erro)=>this.toastService.showToast('Erro ao excluir alarme', ToastType.PERIGO)
        )
  }
  getAlarmes(params:HttpParams){
    this.alarmesService.getAll(params).subscribe(
      alarmes=>this.alarmes = alarmes
    )
  }

  filtrarPorClassificacao(classificacao_id:number){
    if(classificacao_id === 0){
      let params = new HttpParams()
      this.getAlarmes(params)
    }else{
      this.alarmesService.filterByClassificacao(classificacao_id).subscribe(alarmes=>this.alarmes=alarmes)
    }
  }
}
