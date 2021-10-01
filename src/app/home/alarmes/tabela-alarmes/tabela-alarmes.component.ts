import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { finalize } from 'rxjs/operators';
import { ToastType } from 'src/app/shared/components/toast/toast';
import { ToastService } from 'src/app/shared/components/toast/toast.service';
import { Alarme } from 'src/app/shared/services/alarmes/Alarme';
import { AlarmesService } from 'src/app/shared/services/alarmes/alarmes.service';

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
}
